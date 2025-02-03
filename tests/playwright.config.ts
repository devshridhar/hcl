import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        baseURL: 'http://localhost:4000'
    }
});