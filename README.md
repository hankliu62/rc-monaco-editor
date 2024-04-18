# @hankliu/rc-monaco-editor

`MonacoEditor` 编辑器是 `VS Code` 中功能齐全的代码编辑器，支持多种常规语言的IDE，允许配置支持智能提示。

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![build status][github-actions-image]][github-actions-url]
[![Codecov][codecov-image]][codecov-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]
[![dumi][dumi-image]][dumi-url]

[npm-image]: http://img.shields.io/npm/v/rc-monaco-editor.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@hankliu/rc-monaco-editor
[travis-image]: https://img.shields.io/travis/hankliu62/rc-monaco-editor/master?style=flat-square
[github-actions-image]: https://github.com/hankliu62/rc-monaco-editor/workflows/Publish%20Footer%20Components%20Into%20NPM/badge.svg
[github-actions-url]: https://github.com/hankliu62/rc-monaco-editor/actions
[codecov-image]: https://img.shields.io/codecov/c/github/hankliu62/rc-monaco-editor/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/hankliu62/rc-monaco-editor
[download-image]: https://img.shields.io/npm/dm/@hankliu/rc-monaco-editor.svg?style=flat-square
[download-url]: https://npmjs.org/package/@hankliu/rc-monaco-editor
[bundlephobia-url]: https://bundlephobia.com/package/@hankliu/rc-monaco-editor
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@hankliu/rc-monaco-editor
[dumi-url]: https://github.com/umijs/dumi
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square

## 特征

- [x] 支持常见语言
- [x] 支持多种主题【`vs` | `vs-dark` | `hc-black` | `hc-light`】

## 安装

``` bash
npm install @hankliu/rc-monaco-editor --save
```

or

``` bash
yarn add @hankliu/rc-monaco-editor
```

or

``` bash
pnpm install @hankliu/rc-monaco-editor
```

## 使用

```js
import MonacoEditor from '@hankliu/rc-monaco-editor';
import * as React from 'react';


const LanguageDemoHtml = `<h1>Turndown Demo</h1>

<p>This demonstrates <a href="https://github.com/mixmark-io/turndown">turndown</a> – an HTML to Markdown converter in JavaScript.</p>

<h2>Usage</h2>

<pre><code class="language-js">var turndownService = new TurndownService()
console.log(
  turndownService.turndown('&lt;h1&gt;Hello world&lt;/h1&gt;')
)</code></pre>

<hr />

<p>It aims to be <a href="http://commonmark.org/">CommonMark</a>
 compliant, and includes options to style the output. These options include:</p>

<ul>
  <li>headingStyle (setext or atx)</li>
  <li>horizontalRule (*, -, or _)</li>
  <li>bullet (*, -, or +)</li>
  <li>codeBlockStyle (indented or fenced)</li>
  <li>fence (~ or ~)</li>
  <li>emDelimiter (_ or *)</li>
  <li>strongDelimiter (** or __)</li>
  <li>linkStyle (inlined or referenced)</li>
  <li>linkReferenceStyle (full, collapsed, or shortcut)</li>
</ul>
`;

export default function Base() {
  const [content, setContent] = React.useState<string>(LanguageDemoHtml)

  // 监听系统模式（亮色|暗系）改变
  const onWebAppThemeChange = (callback: (theme: "dark" | "light") => void) => {
    const root = document.querySelector("html");

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes") {
          if (root?.getAttribute("data-prefers-color") === "dark") {
            callback("dark");
          } else {
            callback("light");
          }
        }
      }
    });

    observer.observe(root, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }

  // 获得系统模式（亮色|暗系）
  const getWebAppTheme = () => {
    return document.querySelector("html")?.getAttribute("data-prefers-color") === "dark"
      ? "dark"
      : "light";
  }

  return (
    <div>
      <MonacoEditor
        height={400}
        value={content}
        language="html"
        onChange={(val) => {
          setContent(val);
        }}
        getWebAppTheme={getWebAppTheme}
        onWebAppThemeChange={onDidChangeTheme}
      />
    </div>
  );
}
```

将 `Monaco Webpack` 插件 [monaco-editor-webpack-plugin](https://github.com/microsoft/monaco-editor/tree/main/webpack-plugin) 添加到您的 `webpack.config.js` 中：

``` javascript
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
  plugins: [
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md#options
      languages: ['json']
    })
  ]
};
```

## API 参数

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| className | string | - | 组件外层元素classname |
| prefixCls | string | hlui-monaco-editor | 组件外层元素 classname 前缀 |
| width | string \| number | 100% | 编辑器的宽度。|
| height | string \| number | 100% | 编辑器的高度 |
| value | 编辑器中自动创建的模型的值 | string | - |
| language | TMonacoEditorLanguage | - | 编辑器中自动创建的模型的初始语言 |
| theme | EMonacoEditorTheme | - | 编辑器的主题 |
| readOnly | boolean | false | 编辑器是否只读 |
| highlightWhitespace | boolean | true | 是否高亮空格 |
| highlightActiveLine | boolean | true | 是否高亮当前所在的行 |
| formatOnSave | boolean | true | 保存时，是否自动格式化 |
| options | monaco.editor.IStandaloneEditorConstructionOptions | 默认值在如下所示 | 请参阅 [monaco.editor.IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/docs.html#variables/editor.EditorOptions.html) |
| onChange | (newValue: string, event: monaco.editor.IModelContentChangedEvent) => void | - | 当前编辑器模型的内容发生更改时发出的事件 |
| onWillMount | (monaco) => void | - | 在编辑器挂载之前发出的事件（类似于 `componentWillMount React`） |
| onMount | (editor, monaco) => void | - | 挂载编辑器时发出的事件（类似于 `componentDidMount React`） |
| onWillUnmount | (editor, monaco) => void | - | 在编辑器卸载之前发出的事件（类似于 `componentWillUnmount React`） |
| getWebAppTheme | () => "dark" \| "light" | [getTheme]() | 获得当前Web应用的主题模式（亮色｜暗色），当不存在 `theme` 参数时根据当前函数的返回值设置编辑器的主题 |
| onWebAppThemeChange | (callback: (theme: "dark" \| "light") => void) => (() => void) \| void | [onDidChangeTheme]() | 当当前Web应用的主题模式（亮色｜暗色）发生改变时的监听函数，当不存在 `theme` 参数时根据当前监听函数的返回值动态设置编辑器的主题 |

#### options 参数默认值

``` ts
{
  readOnly: false, // 是否可编辑 // 是否为只读模式
  // language: language, // 语言类型
  acceptSuggestionOnCommitCharacter: true, // 接受关于提交字符的建议
  acceptSuggestionOnEnter: "on", // 接受输入建议 "on" | "off" | "smart" //-如果设置off 编辑器上的代码补全显示了,但却不补上
  accessibilityPageSize: 10, // 辅助功能页面大小 Number 说明：控制编辑器中可由屏幕阅读器读出的行数。警告：这对大于默认值的数字具有性能含义。
  accessibilitySupport: "off", // 辅助功能支持 控制编辑器是否应在为屏幕阅读器优化的模式下运行。
  autoClosingBrackets: "always", // 是否自动添加结束括号(包括中括号) "always" | "languageDefined" | "beforeWhitespace" | "never"
  autoClosingDelete: "always", // 是否自动删除结束括号(包括中括号) "always" | "never" | "auto"
  autoClosingOvertype: "always", // 是否关闭改写 即使用insert模式时是覆盖后面的文字还是不覆盖后面的文字 "always" | "never" | "auto"
  autoClosingQuotes: "always", // 是否自动添加结束的单引号 双引号 "always" | "languageDefined" | "beforeWhitespace" | "never"
  autoIndent: "none", // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
  automaticLayout: true, // 自动布局
  foldingStrategy: "indentation", // 折叠方式  auto | indentation
  codeLens: false, // 是否显示codeLens 通过 CodeLens，你可以在专注于工作的同时了解代码所发生的情况 – 而无需离开编辑器。 可以查找代码引用、代码更改、关联的 Bug、工作项、代码评审和单元测试。
  codeLensFontFamily: "", // codeLens的字体样式
  codeLensFontSize: 14, // codeLens的字体大小
  colorDecorators: false, // 呈现内联色彩装饰器和颜色选择器
  comments: {
    ignoreEmptyLines: true, // 插入行注释时忽略空行。默认为真。
    insertSpace: true, // 在行注释标记之后和块注释标记内插入一个空格。默认为真。
  }, // 注释配置
  contextmenu: true, // 启用上下文菜单
  columnSelection: false, // 启用列编辑 按下shift键位然后按↑↓键位可以实现列选择 然后实现列编辑
  autoSurround: "never", // 是否应自动环绕选择
  copyWithSyntaxHighlighting: true, // 是否应将语法突出显示复制到剪贴板中 即 当你复制到word中是否保持文字高亮颜色
  cursorBlinking: "blink", // 光标动画样式
  cursorSmoothCaretAnimation: "off", // 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
  cursorStyle: "line", // "Block"|"BlockOutline"|"Line"|"LineThin"|"Underline"|"UnderlineThin" 光标样式
  cursorSurroundingLines: 0, // 光标环绕行数 当文字输入超过屏幕时 可以看见右侧滚动条中光标所处位置是在滚动条中间还是顶部还是底部 即光标环绕行数 环绕行数越大 光标在滚动条中位置越居中
  cursorSurroundingLinesStyle: "all", // "default" | "all" 光标环绕样式
  cursorWidth: 2, // <=25 光标宽度
  minimap: {
    enabled: false, // 是否启用预览图
  }, // 预览图设置
  folding: true, // 是否启用代码折叠
  links: true, // 是否点击链接
  overviewRulerBorder: false, // 是否应围绕概览标尺绘制边框
  renderLineHighlight: "line", // 当前行突出显示方式 'none' | 'gutter' | 'line' | 'all';
  roundedSelection: false, // 选区是否有圆角
  scrollBeyondLastLine: false, // 设置编辑器是否可以滚动到最后一行之后
  // theme: currentTheme,
  tabSize: 2, // tab的空格个数
  renderWhitespace: "all", // 始终显示空格
  // ...options, // 自定义选项
}
```

## 案例

`npm start` 然后打开 http://localhost:8000/examples/

线上案例: https://hankliu62.github.io/rc-monaco-editor

## 单元测试

```
npm test
```

## 覆盖率

```
npm run coverage
```

## License

@hankliu/rc-monaco-editor is released under the MIT license.
