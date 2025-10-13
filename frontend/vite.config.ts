import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use absolute base to ensure built assets load on nested routes (e.g., /servicos/libras)
  // If you ever host under a subpath, set BASE_PATH env accordingly (e.g., "/subpath/").
  base: process.env.BASE_PATH || "/",
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    // Avoid identifier minification collisions between catch parameters and
    // block scoped variables emitted by dependencies (e.g. TanStack Query).
    // When the identifiers get mangled to the same short name under strict
    // mode the browser refuses to evaluate the bundle. Keeping identifiers
    // intact during the build prevents the redeclaration error observed in
    // production ("The catch binding parameter cannot be redeclared in strict
    // mode").
    minifyIdentifiers: false,
  },
  build: {
    // Use root index.html as the entry so Vite can
    // transform it and inject the bundled assets correctly.
  },
}));
