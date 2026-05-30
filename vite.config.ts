import tailwindcss fromimport tailwindcss from import tailwindcss from '@tailwindcss/vite';
import react from'@tailwindcss/vite';
import react from@tailwindcss/vite';import react from '@vitejs/plugin-react';
import path from'@vitejs/plugin-react';
import path from@vitejs/plugin-react';import path from 'path';
import { defineConfig } from'path';
import { defineConfig } frompath';import { defineConfig } from 'vite';
import { fileURLToPath } from'vite';
import { fileURLToPath } fromvite';import { fileURLToPath } from 'url';
const __dirname = typeofconst __dirname = typeof const __dirname = typeof import.meta.dirname !== 'undefined' 
  ? import.meta.dirname 
  : path.dirname(fileURLToPath(import.meta.url));

exportimport.meta.dirname !== 'undefined' 
  ? import.meta.dirname 
  : path.dirname(fileURLToPath(import.meta.url));

exportimport.meta.dirname !== 'undefined' ? import.meta.dirname : path.dirname(fileURLToPath(import.meta.url));export default defineConfig(() => {
  return {
    base: '/-/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
default defineConfig(() => {
  return {
    base: '/-/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
默认导出 defineConfig 函数，该函数返回配置对象，包含基础路径为 `/-/`、插件数组（包含 react 和 tailwindcss 插件）、解析别名（将 `@` 映射到当前目录）、开发服务器配置（热模块替换根据环境变量开启，监听配置随热模块替换状态变化）。
