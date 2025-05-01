// packages/webxr-app/vite.config.ts
import { defineConfig, UserConfig } from 'vite'; // Import types
import basicSsl from '@vitejs/plugin-basic-ssl';
import { InlineConfig } from 'vitest'; // Import Vitest config type

// Extend Vite's UserConfig type to include test configuration
interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig(({ mode }): VitestConfigExport => {
  const isDevelopment = mode === 'development';

  return {
    plugins: [
      basicSsl(),
    ],
    server: {
      https: true,
      host: true,
      // port: 5173
    },
    build: {
      sourcemap: isDevelopment, // Use boolean directly
      // outDir: 'dist',
    },
    // Vitest configuration is nested under the 'test' key
    test: {
      environment: 'jsdom',
      globals: true, // Use Vitest globals (describe, it, expect) without importing
    },
  };
});