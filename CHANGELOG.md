---
order: 6
title: 更新日志
toc: false
timeline: true
---

# 更新日志

```
🐞 Bug 修复
💄 样式更新/less 变量更新
🆕 新增特性
🔥 极其值得关注的新增特性
🇺🇸🇨🇳🇬🇧 国际化改动，注意这里直接用对应国家/地区的旗帜。
📖 :memo: 文档或网站改进
✅ 新增或更新测试用例
🛎 更新警告/提示信息
⌨️ :wheelchair: 可访问性增强
🗑 废弃或移除
🛠 重构或工具链优化
⚡️ 性能提升
```

---

## 0.0.6

- 🆕 新增 `format` Ref 方法，用于格式化编辑器中的代码。
- 🛠 不推荐使用外部自定义加载 `prettier.worker` 进行代码格式化，会存在创建两个 `Worker` 情况，影响性能。

## 0.0.5

- 🛠 将 `@hankliu/hankliu-ui`、 `react-color` 等文档使用的UI组件库从 `dependencies` 移入到 `devDependencies` 中。

## 0.0.3

- 🆕 新增 `readOnly`, `highlightWhitespace`, `highlightActiveLine`, `formatOnSave` 等属性
- 🐞 修复文档站点生成失败问题。
- 🗑 移除无用的 `css` 和 `less` 文件。

## 0.0.1

- 🆕 React monaco editor 组件，支持多种语言，支持多种主题。
