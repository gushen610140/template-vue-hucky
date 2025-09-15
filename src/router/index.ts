import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

/**
 * Convert PascalCase to kebab-case and remove 'Page' suffix
 * @param name PascalCase name (e.g., AboutMePage)
 * @returns kebab-case path (e.g., about-me)
 */
function formatPathFromComponentName(name: string): string {
  // Remove .vue extension if present
  const baseName = name.endsWith(".vue") ? name.slice(0, -4) : name;

  // Remove Page suffix if present
  const withoutPageSuffix = baseName.endsWith("Page")
    ? baseName.slice(0, -4)
    : baseName;

  // Convert PascalCase to kebab-case
  return withoutPageSuffix
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/**
 * Extract component name from file path
 * @param filePath Path to the component file
 * @returns Component name without extension
 */
function getComponentNameFromPath(filePath: string): string {
  // Get the file name from the path
  return filePath.split("/").pop() || "";
}

/**
 * Generate route path from full file path, preserving directory structure
 * @param filePath Full path to the component file (e.g., "@/pages/test/AbcPage.vue")
 * @returns Route path (e.g., "/test/abc")
 */
function generateRoutePathFromFilePath(filePath: string): string {
  // Remove the "@/pages" prefix and get the relative path
  const relativePath = filePath.replace(/^@\/pages\//, "");

  // Split into directory parts and filename
  const pathParts = relativePath.split("/");
  const fileName = pathParts.pop() || "";
  const directories = pathParts.splice(3);

  // Transform the filename using existing logic
  const transformedFileName = formatPathFromComponentName(fileName);

  // Combine directory path with transformed filename
  const fullPath =
    directories.length > 0
      ? `/${directories.join("/")}/${transformedFileName}`
      : `/${transformedFileName}`;

  return fullPath;
}

/**
 * Generate routes from page components using Vite's import.meta.glob
 * @returns Array of route configurations
 */
function generateRoutesFromPages(): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  const pages = import.meta.glob("@/pages/**/*.vue");

  for (const path in pages) {
    const componentName = getComponentNameFromPath(path);
    const routePath = generateRoutePathFromFilePath(path);

    // Special case for home page
    const finalPath = routePath.toLowerCase() === "/home" ? "/" : routePath;

    routes.push({
      path: finalPath,
      name: componentName,
      component: pages[path],
    });
  }

  return routes;
}

// Generate routes from pages directory
const routes: RouteRecordRaw[] = generateRoutesFromPages();

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
