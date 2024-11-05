import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/text/', // 将 <REPO_NAME> 替换为您的 GitHub 仓库名称
})
