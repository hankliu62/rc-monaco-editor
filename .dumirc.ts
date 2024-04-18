import path from 'path';
import { defineConfig } from 'dumi';
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import { EditorLanguage } from 'monaco-editor/esm/metadata';

import { Languages } from './src/constants/editor'

const config: ReturnType<typeof defineConfig> = {
  alias: {
    '@hankliu/rc-monaco-editor': path.resolve('src'),
    '@hankliu/rc-monaco-editor/es': path.resolve('src'),
  },
  favicons: ['https://hankliu62.github.io/frontend/favicon.ico'],
  themeConfig: {
    name: 'Image',
    logo: 'https://hankliu62.github.io/frontend/favicon.ico',
  },
  chainWebpack(memo) {
    memo.plugin('MonacoWebpackPlugin').use(MonacoWebpackPlugin, [{
      languages: Languages as EditorLanguage[],
      filename: "static/[name].worker.js",
    }]);

    memo.plugin('NodePolyfillPlugin').use(NodePolyfillPlugin, []);
    // umijs 配置worker-loader
    // memo.module
    // .rule('worker')
    //   .test(/\.worker\.(t|j)s$/)
    //   .use('babel-loader')
    //   .loader('babel-loader')
    //   .options({
    //     presets: ['@babel/preset-typescript'],
    //   })
    //   .end()
    //   .use('worker-loader')
    //   .loader('worker-loader')
    //   .options({ inline: no-fallback });
    memo.stats({ children: true });
  },
  mfsu: false,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@hankliu/hankliu-ui',
        libraryDirectory: 'lib',
        style: true,
      },
    ],
  ],
}

// 是否通过github actions部署
const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  // @ts-ignore
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  // 用于为静态资源（如图像、样式表、JavaScript 文件等）设置 URL 前缀
  // 这在将应用部署到自定义域名或 CDN 上时特别有用，因为它允许您将静态资源存储在不同的位置
  config.base  = `/${repo}/`;
  // 用于为应用设置基础路径(Link组件中，类似 history 里面的basename，在路由跳转时自动加前缀)
  // 这在将应用部署到子目录下时特别有用，因为它允许您指定应用所在的目录
  config.publicPath = `/${repo}/`;

  console.log("next config is:", config);
}

export default defineConfig(config);

