import classNames from 'classnames';
import type { editor as MonacoEditor } from 'monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { CommandsRegistry } from 'monaco-editor/esm/vs/platform/commands/common/commands';
import type { ForwardRefRenderFunction } from 'react';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';

import type { TEditorLanguage } from '@/types';
import { getTheme, onDidChangeTheme } from '@/utils/themes';
import { formattingEditorContent, registerDocumentFormattingEditProviders } from '@/format';
import { EMonacoEditorTheme, SupportLanguages } from '@/constants';

export * from '@/constants';
export * from '@/types';
export * from '@/utils/themes';
export * from '@/utils/workers';
export * from '@/format';
export * from '@/setupTsxMode';

function processSize(size: number | string) {
  return !/^\d+$/.test(size as string) ? size : `${size}px`;
}

// Ctrl + S 快捷键，进行格式化
function setupKeybindings(editor): { dispose: () => void } {
  const formatCommandId = 'editor.action.formatDocument';
  const { handler, when } = CommandsRegistry.getCommand(formatCommandId);
  // 监听保存，进行代码格式化
  return editor._standaloneKeybindingService.addDynamicKeybinding(
    formatCommandId,
    monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
    handler,
    when,
  );
}

export type Monaco = typeof monaco;

export interface IMonacoEditorImperativeHandles {
  // 获得文本编辑器
  getEditor: () => monaco.editor.IStandaloneCodeEditor | null;
  // 格式化代码
  format: (text?: string, lang?: TEditorLanguage) => ReturnType<typeof formattingEditorContent>;
  monaco: Monaco;
}

export interface IMonacoEditorProps {
  width?: string | number;
  height?: string | number;
  prefixCls?: string;
  value?: string;
  defaultValue?: string; // 初始值
  className?: string;
  language: TEditorLanguage;
  theme?: EMonacoEditorTheme;
  readOnly?: boolean;
  highlightWhitespace?: boolean;
  highlightActiveLine?: boolean;
  formatOnSave?: boolean;
  options?: monaco.editor.IStandaloneEditorConstructionOptions;
  onChange?: (value: string, event: monaco.editor.IModelContentChangedEvent) => void;
  onWillMount?: (monaco: Monaco) => void;
  onMount?: (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void;
  onWillUnmount?: (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void;
  getWebAppTheme?: typeof getTheme;
  onWebAppThemeChange?: typeof onDidChangeTheme;
}

/**
 * Code编辑器
 *
 * @param props
 * @returns
 */
const CodeEditor: ForwardRefRenderFunction<IMonacoEditorImperativeHandles, IMonacoEditorProps> = (
  {
    theme,
    prefixCls = 'hlui-monaco-editor',
    width = '100%',
    height = '100%',
    value = '',
    defaultValue = '',
    className,
    language = 'html',
    readOnly = false,
    highlightWhitespace = true,
    highlightActiveLine = true,
    formatOnSave = true,
    options = {},
    onChange = () => {},
    onWillMount = (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _monaco: Monaco,
    ) => {},
    onMount = (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _editor: monaco.editor.IStandaloneCodeEditor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _monaco: Monaco,
    ) => {},
    onWillUnmount = (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _editor: monaco.editor.IStandaloneCodeEditor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _monaco: Monaco,
    ) => {},
    getWebAppTheme = getTheme,
    onWebAppThemeChange = onDidChangeTheme,
  }: IMonacoEditorProps,
  ref,
) => {
  const editorContainer = useRef<HTMLDivElement | null>(null);
  const editor = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null);
  // 移除快捷键保存格式化事件
  const disposeFormatOnSaveHandler = useRef<() => void>(null);
  // 当前保存是否会进行格式化
  const formattingOnSave = useRef<boolean>(false);

  const fixedWidth = processSize(width);
  const fixedHeight = processSize(height);

  const style = useMemo(
    () => ({
      width: fixedWidth,
      height: fixedHeight,
    }),
    [fixedWidth, fixedHeight],
  );

  // 获得文本编辑器
  function getEditor(): MonacoEditor.IStandaloneCodeEditor | null {
    return editor.current;
  }

  // 获得文本编辑器
  function format(
    text?: string,
    lang?: TEditorLanguage,
  ): ReturnType<typeof formattingEditorContent> {
    if (editor.current) {
      const formatLanguage = lang || editor.current.getModel().getLanguageId();
      if (!SupportLanguages.includes(formatLanguage)) {
        return Promise.resolve({ error: new Error(`${formatLanguage}语言暂不支持格式化！`) });
      }

      return formattingEditorContent(
        text || editor.current.getValue(),
        lang || (editor.current.getModel().getLanguageId() as TEditorLanguage),
      );
    }

    return Promise.resolve({ error: new Error('编辑器不存在！') });
  }

  /**
   * 导出方法
   */
  useImperativeHandle(
    ref,
    () => ({
      getEditor,
      format,
      monaco,
    }),
    [],
  );

  // 初始化
  useEffect(() => {
    if (editorContainer.current && language) {
      // 创建之前，生命周期函数
      onWillMount(monaco);

      const currentTheme =
        theme || (getWebAppTheme() === 'light' ? EMonacoEditorTheme.VSDark : EMonacoEditorTheme.VS);
      editor.current = monaco.editor.create(editorContainer.current!, {
        readOnly, // 是否可编辑 // 是否为只读模式
        language, // 语言类型
        acceptSuggestionOnCommitCharacter: true, // 接受关于提交字符的建议
        acceptSuggestionOnEnter: 'on', // 接受输入建议 "on" | "off" | "smart" //-如果设置off 编辑器上的代码补全显示了,但却不补上
        accessibilityPageSize: 10, // 辅助功能页面大小 Number 说明：控制编辑器中可由屏幕阅读器读出的行数。警告：这对大于默认值的数字具有性能含义。
        accessibilitySupport: 'off', // 辅助功能支持 控制编辑器是否应在为屏幕阅读器优化的模式下运行。
        autoClosingBrackets: 'always', // 是否自动添加结束括号(包括中括号) "always" | "languageDefined" | "beforeWhitespace" | "never"
        autoClosingDelete: 'always', // 是否自动删除结束括号(包括中括号) "always" | "never" | "auto"
        autoClosingOvertype: 'always', // 是否关闭改写 即使用insert模式时是覆盖后面的文字还是不覆盖后面的文字 "always" | "never" | "auto"
        autoClosingQuotes: 'always', // 是否自动添加结束的单引号 双引号 "always" | "languageDefined" | "beforeWhitespace" | "never"
        autoIndent: 'none', // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
        automaticLayout: true, // 自动布局
        foldingStrategy: 'indentation', // 折叠方式  auto | indentation
        codeLens: false, // 是否显示codeLens 通过 CodeLens，你可以在专注于工作的同时了解代码所发生的情况 – 而无需离开编辑器。 可以查找代码引用、代码更改、关联的 Bug、工作项、代码评审和单元测试。
        codeLensFontFamily: '', // codeLens的字体样式
        codeLensFontSize: 14, // codeLens的字体大小
        colorDecorators: false, // 呈现内联色彩装饰器和颜色选择器
        comments: {
          ignoreEmptyLines: true, // 插入行注释时忽略空行。默认为真。
          insertSpace: true, // 在行注释标记之后和块注释标记内插入一个空格。默认为真。
        }, // 注释配置
        contextmenu: true, // 启用上下文菜单
        columnSelection: false, // 启用列编辑 按下shift键位然后按↑↓键位可以实现列选择 然后实现列编辑
        autoSurround: 'never', // 是否应自动环绕选择
        copyWithSyntaxHighlighting: true, // 是否应将语法突出显示复制到剪贴板中 即 当你复制到word中是否保持文字高亮颜色
        cursorBlinking: 'blink', // 光标动画样式
        cursorSmoothCaretAnimation: 'off', // 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
        cursorStyle: 'line', // "Block"|"BlockOutline"|"Line"|"LineThin"|"Underline"|"UnderlineThin" 光标样式
        cursorSurroundingLines: 0, // 光标环绕行数 当文字输入超过屏幕时 可以看见右侧滚动条中光标所处位置是在滚动条中间还是顶部还是底部 即光标环绕行数 环绕行数越大 光标在滚动条中位置越居中
        cursorSurroundingLinesStyle: 'all', // "default" | "all" 光标环绕样式
        cursorWidth: 2, // <=25 光标宽度
        minimap: {
          enabled: false, // 是否启用预览图
        }, // 预览图设置
        folding: true, // 是否启用代码折叠
        links: true, // 是否点击链接
        overviewRulerBorder: false, // 是否应围绕概览标尺绘制边框
        renderLineHighlight: highlightActiveLine ? 'line' : 'none', // 当前行突出显示方式 'none' | 'gutter' | 'line' | 'all';
        roundedSelection: false, // 选区是否有圆角
        scrollBeyondLastLine: false, // 设置编辑器是否可以滚动到最后一行之后
        theme: currentTheme,
        tabSize: 2, // tab的空格个数
        renderWhitespace: highlightWhitespace ? 'all' : 'none', // 始终显示空格
        ...options, // 自定义选项
      });

      // 初始化默认内容
      editor.current.setValue(value || defaultValue);

      // 监听文件内容修改
      editor.current.onDidChangeModelContent(event => {
        onChange(editor.current.getValue(), event);
      });

      // 保存是否自动format
      if (formatOnSave) {
        // 添加快捷键保存格式化事件
        const { dispose: keyDispose } = setupKeybindings(editor.current);
        formattingOnSave.current = true;
        // 添加快捷键保存格式化事件回调
        disposeFormatOnSaveHandler.current = () => {
          keyDispose();
          formattingOnSave.current = false;
        };
      }

      onMount(editor.current, monaco);
    }

    // 注册代码格式化提供者
    const { dispose } = registerDocumentFormattingEditProviders();

    return () => {
      // 注销之前执行生命周期函数
      onWillUnmount(editor.current, monaco);
      if (editor.current) editor.current!.dispose();
      // 解除注册代码格式化提供者
      dispose();

      // 移除快捷键保存格式化事件
      if (disposeFormatOnSaveHandler.current) {
        disposeFormatOnSaveHandler.current();
      }
    };
  }, []);

  // 保存时，是否可以自动格式化
  useEffect(() => {
    if (formatOnSave) {
      // 如果已经监听，不重复添加
      if (!formattingOnSave.current) {
        formattingOnSave.current = true;
        // 添加快捷键保存格式化事件
        const { dispose: keyDispose } = setupKeybindings(editor.current);
        // 移除快捷键保存格式化事件回调
        disposeFormatOnSaveHandler.current = () => {
          keyDispose();
          formattingOnSave.current = false;
        };
      }
    } else {
      // 移除快捷键保存格式化事件
      if (disposeFormatOnSaveHandler.current) disposeFormatOnSaveHandler.current();
    }
  }, [formatOnSave]);

  // 修改语言
  useEffect(() => {
    if (editor.current) {
      const model = editor.current.getModel();
      monaco.editor.setModelLanguage(model, language);
    }
  }, [language]);

  // 修改内容
  useEffect(() => {
    if (editor?.current) {
      const val = editor.current?.getValue();

      if (val !== value) {
        editor.current.setValue(value);
      }
    }
  }, [value]);

  // 修改是否只读
  useEffect(() => {
    if (editor?.current) {
      editor.current.updateOptions({ readOnly });
    }
  }, [readOnly]);

  // 修改是否突出显示当前行
  useEffect(() => {
    if (editor?.current) {
      editor.current.updateOptions({ renderLineHighlight: highlightActiveLine ? 'line' : 'none' });
    }
  }, [highlightActiveLine]);

  // 修改是否显示空格
  useEffect(() => {
    if (editor?.current) {
      editor.current.updateOptions({ renderWhitespace: highlightWhitespace ? 'all' : 'none' });
    }
  }, [highlightWhitespace]);

  // 修改主题
  useEffect(() => {
    const currentTheme =
      theme ||
      options.theme ||
      (getWebAppTheme() === 'light' ? EMonacoEditorTheme.VSDark : EMonacoEditorTheme.VS);
    monaco.editor.setTheme(currentTheme);
  }, [options.theme, theme]);

  // 根据WebApp系统主题色修改编辑器主题
  useEffect(() => {
    function handleThemeChange(outTheme) {
      const currentTheme =
        theme ||
        options.theme ||
        (outTheme === 'light' ? EMonacoEditorTheme.VSDark : EMonacoEditorTheme.VS);
      monaco.editor.setTheme(currentTheme);
    }
    const dispose = onWebAppThemeChange(handleThemeChange);
    return () => dispose && dispose();
  }, [options.theme, theme, onWebAppThemeChange]);

  // 监听窗口Resize事件，重新布局
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      window.setTimeout(() => editor.current!.layout(), 0);
    });
    observer.observe(editorContainer.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={editorContainer}
      className={classNames(`${prefixCls}`, {
        [className]: className,
      })}
      style={style}
    />
  );
};

export default forwardRef(CodeEditor);
