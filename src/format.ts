import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import type { editor as MonacoEditor } from 'monaco-editor';
// @ts-ignore
import PrettierWorker from 'worker-loader!./workers/prettier.worker';
import { createWorkerQueue } from '@/utils/workers';
import { SupportLanguages } from '@/constants';
import type { TEditorLanguage } from '@/types';

let prettierWorker;

export async function formattingEditorContent(
  text: string,
  language: TEditorLanguage,
): Promise<{ canceled?: boolean; error?: Error; pretty?: string }> {
  if (!prettierWorker) {
    prettierWorker = createWorkerQueue(PrettierWorker);
  }
  // 使用WebWorker进行代码格式化处理
  return await prettierWorker.emit({
    text,
    language,
  });
}

/**
 * 注册代码格式化工具
 *
 * @returns
 */
export function registerDocumentFormattingEditProviders() {
  const disposables = [];
  const formattingEditProvider = {
    async provideDocumentFormattingEdits(model: MonacoEditor.ITextModel) {
      // 使用WebWorker进行代码格式化处理
      const { canceled, error, pretty } = await formattingEditorContent(
        model.getValue(),
        model.getLanguageId() as TEditorLanguage,
      );

      if (canceled || error) return [];

      return [
        {
          range: model.getFullModelRange(),
          text: pretty,
        },
      ];
    },
  };

  for (const lang of SupportLanguages) {
    disposables.push(
      monaco.languages.registerDocumentFormattingEditProvider(lang, formattingEditProvider),
    );
  }

  return {
    dispose() {
      for (const disposable of disposables) disposable.dispose();
      if (prettierWorker) {
        prettierWorker.terminate();
      }
    },
  };
}
