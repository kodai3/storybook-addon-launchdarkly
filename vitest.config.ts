import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupFiles.js'],
    include: ['**/*.test.ts', '**/*.test.tsx'],
  },
});
