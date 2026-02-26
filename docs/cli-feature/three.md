# 3D

## Three.js

Hucky 选用 [three.js](https://threejs.org/manual/#zh) 作为 3D 框架，您可以学习相关知识

## 首页

Hucky 的首页层叠关系非常复杂，在这里做解释

- z-10 导航栏 fixed 位于所有元素的最上方
- z-8 悬浮文字 仅次于导航栏，要求用户最先看到
- z-7 Three.js Canvas 位于悬浮文字下方，要求用户在看到悬浮文字后立即看到 3D 模型，同时将 canvas 背景透明，让用户可以看到 canvas 下方的主内容
- z-5 主内容区域 位于 Three.js Canvas 下方，主要提供了背景颜色
- z-1 页脚 位于所有元素的最下方且 fixed，完成了类似幕布拉开的效果

## 3D 动画

Hucky 选用 [GSAP](https://gsap.com/docs/v3/) 作为 3D 动画库，您可以学习相关知识
