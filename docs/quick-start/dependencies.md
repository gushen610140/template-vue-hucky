# 项目依赖项介绍文档

## 一、生产依赖 (dependencies)

生产依赖是项目运行时必须的核心依赖，保障应用在生产环境正常工作。

### 1. 核心框架

- **vue**: Vue.js 3.x 核心库，用于构建用户界面的渐进式 JavaScript 框架，提供响应式数据绑定、组件化开发等能力，是整个项目的基础。

### 2. 状态管理

- **pinia**: Vue 官方推荐的状态管理库，支持 Vue 2 和 Vue 3，采用模块化设计，提供简洁的 API 来管理应用全局状态，替代了传统的 Vuex。
- **pinia-plugin-persistedstate**: Pinia 的持久化插件，可将 Pinia 中的状态持久化到本地存储（如 `localStorage`），页面刷新后状态不丢失，提升用户体验。

### 3. 路由管理

- **vue-router**: Vue 官方路由管理器，用于构建单页应用的路由系统，实现组件之间的导航、参数传递和路由守卫等功能。

### 4. 网络请求

- **axios**: 基于 Promise 的 HTTP 客户端，支持浏览器和 Node.js，用于发送异步请求、拦截请求/响应、统一处理错误等，是前后端数据交互的核心工具。

### 5. UI 组件与样式

- **daisyui**: 基于 Tailwind CSS 的组件库，提供丰富的预定义 UI 组件（如按钮、卡片、模态框等），简化页面开发，支持主题定制和响应式设计。

### 6. 工具库

- **@vueuse/core**: Vue 组合式 API 的实用工具集，封装了大量常用功能（如防抖、节流、本地存储、事件监听等），开箱即用，提升开发效率。
- **radash**: 现代 JavaScript 实用工具库，提供函数式编程风格的工具函数，简化数组、对象、异步操作等场景的处理，补充原生 JS 能力。
- **motion-v**: Vue 3 的动画库，基于 Web Animations API，用于创建流畅的过渡和动画效果，支持组件级别的动画控制，让交互更生动。

## 二、开发依赖 (devDependencies)

开发依赖仅在开发阶段使用，用于提升开发效率、保障代码质量、辅助构建与测试等。

### 1. 构建工具

- **vite**: 下一代前端构建工具，基于 ES 模块，提供极速的热更新和构建速度，支持 Vue、React 等框架，是项目的核心构建引擎。
- **vitepress**: 基于 Vite 和 Vue 的静态站点生成器，用于构建文档网站，支持 Markdown 编写和自定义主题，适合项目文档维护。
- **@vitejs/plugin-vue** / **@vitejs/plugin-vue-jsx**: Vite 官方插件，分别用于支持 Vue 单文件组件（SFC）和 Vue 中的 JSX 语法，扩展 Vite 对 Vue 的支持能力。
- **@vue/babel-plugin-jsx**: Babel 插件，用于在 Vue 项目中支持 JSX 语法，增强组件的灵活性和表达力。
- **unplugin-auto-import**: 自动导入插件，可自动导入 Vue、Vue Router、Pinia 等 API，无需手动编写 `import` 语句，减少样板代码。

### 2. CSS 框架与工具

- **tailwindcss**: 实用优先的 CSS 框架，通过原子化类名快速构建自定义 UI，支持响应式设计和主题定制，是现代前端开发的流行选择。
- **@tailwindcss/vite**: Tailwind CSS 的 Vite 插件，实现 Tailwind 的热更新和按需编译，提升开发体验，确保样式开发的高效性。

### 3. 类型检查

- **typescript**: 静态类型检查的 JavaScript 超集，增强代码的可维护性和可读性，支持 Vue 3 的类型推导，是大型项目的必备工具。
- **vue-tsc**: Vue 项目的 TypeScript 类型检查工具，基于 TypeScript 编译器，对 Vue 单文件组件进行类型校验，保障类型安全。
- **@vue/tsconfig**: Vue 官方提供的 TypeScript 配置文件模板，包含 Vue 项目的最佳实践配置，简化 TS 配置流程。
- **@types/node**: Node.js 的类型定义文件，为 Node.js API 提供类型提示，提升 Node.js 相关代码的开发体验。

### 4. 代码规范

- **eslint**: 可扩展的 JavaScript 代码检查工具，用于发现代码中的语法错误、风格问题和潜在 Bug，保障代码质量。
- **eslint-plugin-vue**: ESLint 插件，针对 Vue 单文件组件提供特定的代码规则检查，如模板语法、组件生命周期等，是 Vue 项目规范的核心工具。
- **eslint-plugin-react** / **eslint-plugin-react-hooks**: ESLint 插件，用于检查 React 代码和 React Hooks 的使用规范（注：若项目以 Vue 为主，可能为遗留配置或多框架支持场景）。
- **typescript-eslint**: ESLint 与 TypeScript 集成的工具集，提供 TypeScript 代码的检查规则，保障 TS 代码质量。
- **prettier**: 代码格式化工具，支持多种语言，自动统一代码风格，与 ESLint 配合使用可实现“检查+格式化”的完整工作流，提升团队协作效率。
