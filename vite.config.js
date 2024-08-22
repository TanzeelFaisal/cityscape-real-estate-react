import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'assets/js/bootstrap.bundle.min.js',
        'assets/css/bootstrap.min.css',
        'assets/css/fontawesome-all.min.css',
        'assets/css/line-awesome.min.css'
      ],
      output: {
        globals: {
          'assets/js/bootstrap.bundle.min.js': 'bootstrap',
          'assets/css/bootstrap.min.css': 'bootstrapCSS',
          'assets/css/fontawesome-all.min.css': 'fontawesomeCSS',
          'assets/css/line-awesome.min.css': 'lineAwesomeCSS'
        }
      }
    }
  }
});
