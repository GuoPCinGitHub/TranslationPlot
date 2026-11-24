---
published: 1970-01-01
draft: true
---

集合占位文件：`moments` 功能关闭且 `src/content/moments/` 无真实内容时，
Astro content layer 会在 build 时对空集合发出
`[WARN] The collection "moments" does not exist or is empty`。
本文件（`draft: true` + `_` 前缀）保证集合非空以消除警告；查询层
（`getSortedMoments`）按 `_` 前缀过滤，任何环境都不会展示。

新增真实动态后可直接删除本文件。
