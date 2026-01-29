import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { addRulesForRoutes } from "./rules";

/**
 * 通过 vite 的 meta.glob 从文件系统读取路由文件
 * @returns 适配 vue router 的路由数组
 */
function generateRoutesFromPages(): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // @ 路径已经在 vite 和 ts 进行配置
  // 仅读取 .vue 结尾的文件
  const pagePathMap = import.meta.glob("@/pages/**/*.vue");

  for (const path in pagePathMap) {
    const routePath = getRoutePathFromFilePath(path);

    routes.push({
      path: routePath,
      component: pagePathMap[path],
    });
  }

  return routes;
}

/**
 * 根据文件系统路径生成路由路径
 * @param filePath Full path to the component file (e.g., "@/pages/test/AbcPage.vue")
 * @returns Route path (e.g., "test/abc")
 */
function getRoutePathFromFilePath(filePath: string): string {
  // 移除 "/src/pages/" 前缀和 ".vue" 后缀获得相对路径
  const relativePath = filePath
    .replace(/^\/src\/pages\//, "")
    .replace(/\.vue$/, "");

  // 将 index 替换为空并将结尾多余的 / 符号删除
  const noIndexPath = relativePath.replace(/index/, "").replace(/\/$/, "");

  // 将路径调整成以 / 开头
  const intactPath = `/${noIndexPath}`;

  return intactPath;
}

const routes: RouteRecordRaw[] = generateRoutesFromPages();

const ruledRoutes = addRulesForRoutes(routes);

// WebHash 使用 /# 开头处理前端页面路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: ruledRoutes,
});

export default router;
