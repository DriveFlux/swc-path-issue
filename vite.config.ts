import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths({
    projects: [
        './internal/tsconfig.json',
        './apps/bar/tsconfig.json',
    ]
  })],
})