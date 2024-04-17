import MonacoEditor from '@hankliu/rc-monaco-editor';
import * as React from 'react';
import '../../assets/index.less';

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

  const onDidChangeTheme = (callback: (theme: "dark" | "light") => void) => {
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

  return (
    <div>
      <MonacoEditor
        height={400}
        value={content}
        language="html"
        onChange={(val) => {
          setContent(val);
        }}
        getWebAppTheme={() => {
          return document.querySelector("html")?.getAttribute("data-prefers-color") === "dark"
            ? "dark"
            : "light";
        }}
        onWebAppThemeChange={onDidChangeTheme}
      />
    </div>
  );
}
