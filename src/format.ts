import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// @ts-ignore
import PrettierWorker from 'worker-loader!./workers/prettier.worker';
import { createWorkerQueue } from '@/utils/workers';

/**
 * 注册代码格式化工具
 *
 * @returns
 */
export function registerDocumentFormattingEditProviders() {
  const disposables = [];
  let prettierWorker;

  const formattingEditProvider = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async provideDocumentFormattingEdits(model, _options, _token) {
      if (!prettierWorker) {
        prettierWorker = createWorkerQueue(PrettierWorker);
      }
      // 使用WebWorker进行代码格式化处理
      const { canceled, error, pretty } = await prettierWorker.emit({
        text: model.getValue(),
        language: model.getLanguageId(),
      });

      if (canceled || error) return [];

      return [
        {
          range: model.getFullModelRange(),
          text: pretty,
        },
      ];
    },
  };

  const supportLanguages = [
    'json',
    'javascript',
    'typescript',
    'css',
    'less',
    'scss',
    'markdown',
    'graphql',
    'handlebars',
    'html',
    'yaml',
    'sql',
  ];

  for (const lang of supportLanguages) {
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
