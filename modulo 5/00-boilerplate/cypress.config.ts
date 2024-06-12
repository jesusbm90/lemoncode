import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080/#',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
  },
});
