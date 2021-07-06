import { defineConfig } from "vite";
import { resolve } from 'path'
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
    plugins: [reactRefresh()],
    base: './',
    resolve: {
        alias: [
            {
                find: '@StackSvg',
                replacement: resolve(__dirname, 'src/Components/StackSvg/StackSvg')
            }
      ]
  }
})