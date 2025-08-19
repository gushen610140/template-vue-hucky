import * as fs from "node:fs";
import * as path from "node:path";
import * as readline from "node:readline";

// Constants
const PAGES_DIR = path.resolve(process.cwd(), "src/components");
const TEMPLATE = `<script lang="ts" setup>
</script>

<template>
  <div>
  </div>
</template>

<style scoped>
</style>
`;

/**
 * Ensures the pages directory exists
 */
function ensurePagesDirectory() {
  if (!fs.existsSync(PAGES_DIR)) {
    console.log(`检测到 ${PAGES_DIR} 目录不存在, 正在为您创建该目录`);
    fs.mkdirSync(PAGES_DIR, { recursive: true });
  }
}

/**
 * Formats the component name to PascalCase and ensures it ends with .vue
 * @param name The input name to format
 * @returns Properly formatted component name
 */
function formatComponentName(name: string): string {
  // .vue extension if present
  if (name.endsWith(".vue")) {
    return name;
  }

  // Page suffix if present
  if (name.endsWith("Component")) {
    return `${name}.vue`;
  }

  // Convert to PascalCase
  let baseName = name
    .split(/[-_\s.]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");

  // Ensure name is not empty
  if (!baseName) {
    throw new Error("组件名称不能为空");
  }

  // Add Page suffix if not already present
  if (!baseName.endsWith("Component")) {
    baseName += "Component";
  }

  // Add .vue extension
  return `${baseName}.vue`;
}

/**
 * Creates a new Vue component file
 * @param componentName The name of the component to create
 */
async function createComponent(componentName: string) {
  const formattedName = formatComponentName(componentName);
  const filePath = path.join(PAGES_DIR, formattedName);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.error(`❌ 失败: 组件 ${formattedName} 已存在于 ${filePath}`);
    return false;
  }

  try {
    // Write the file
    fs.writeFileSync(filePath, TEMPLATE);
    console.log(`✅ 成功: 创建组件 ${formattedName} at ${filePath}`);
    return true;
  } catch (error) {
    console.error(
      `❌ 失败: ${error instanceof Error ? error.message : String(error)}`,
    );
    return false;
  }
}

/**
 * Main function to run the script
 */
async function main() {
  ensurePagesDirectory();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\n🚀 组件生成器");
  console.log("==========================");

  try {
    const componentName = await new Promise<string>((resolve) => {
      rl.question(
        "✨ 请输入组件名称, 程序将自动转换为 PascalCase: (例如: about-me => AboutMeComponent)\n",
        (answer: string) => {
          resolve(answer.trim());
        },
      );
    });

    if (!componentName) {
      console.error("❌ 失败: 组件名称不能为空");
      return;
    }

    await createComponent(componentName);
  } catch (error) {
    console.error(
      `❌ 失败: ${error instanceof Error ? error.message : String(error)}`,
    );
  } finally {
    rl.close();
  }
}

// Run the script
main().catch(console.error);
