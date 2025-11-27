import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/resume-builder/", // Replace with your GitHub repo name
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//     open: true,
//     strictPort: false,
//   },
//   build: {
//     outDir: "dist",
//     sourcemap: true,
//   },
// });
