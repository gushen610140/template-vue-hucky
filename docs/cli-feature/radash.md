# 辅助工具

## 使用

Hucky 安装了 [Radash](https://radash.uihtm.com/) 库，用于辅助处理数组、对象、字符串等数据。

您可以自行查询文档来了解更多用法。

## 节流

在查阅 Radash 文档时发现其 `throttle` 函数的使用存在错误，在这里补充纠正，在文档中的用法如下：

```ts
import { throttle } from 'radash'

const throttledScroll = throttle(() => {
  console.log('Scroll event handled')
}, 100)

window.addEventListener('scroll', throttledScroll)
// 滚动时，函数最多每100ms执行一次
```

事实上 `throttle` 函数的第一个参数才是节流时间，第二个参数是函数。正确写法应该如下：

```ts
import { throttle } from 'radash'

const throttledScroll = throttle(100, () => {
  console.log('Scroll event handled')
})

window.addEventListener('scroll', throttledScroll)
```
