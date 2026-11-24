---
title: 占位系列（请勿删除说明见下）
status: ongoing
---

集合占位文件：`series` 功能关闭且 `src/content/series/` 无真实内容时，
Astro content layer 会在 build 时对空集合发出
`[WARN] The collection "series" does not exist or is empty`。
本文件保证集合非空以消除警告；查询层（`getSeriesCatalog`）按 `_` 前缀过滤，
占位不会出现在任何页面、导航或统计中。

新增真实系列后可直接删除本文件。
