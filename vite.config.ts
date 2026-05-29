import tailwindcss from  '@tailwindcss/vite';
import react from
@tailwindcss/vite'；import react from
 '@vitejs/plugin-react';
import path from
@vitejs/plugin-react';import path from
 'path';
import { defineConfig } from
path';import { defineConfig } from
 'vite';

export 快速'；导出 default defineConfig(() => {
  return {
    base: './', // 🌟 核心修复：改成相对路径，完美适配你的库名「-」
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
plugins: [react(), tailwindcss()],resolve: {alias: {'@': path.resolve(__dirname, '.'),},},server: {// AI Studio 中通过 DISABLE_HMR 环境变量禁用了热模块替换（HMR）。

      // Do not modify. File watching is disabled to prevent flickering during agent edits.
请勿修改。文件监视已被禁用，以防止在智能体编辑过程中出现闪烁。

      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
hmr: process.env.DISABLE_HMR !== 'true',// 当 DISABLE_HMR 为 true 时禁用文件监视，以在代理编辑期间节省 CPU 资源。

      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
