import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repositoryName?.endsWith(".github.io");
const pagesBase = process.env.GITHUB_ACTIONS === "true"
  ? isUserSite
    ? "/"
    : repositoryName
      ? `/${repositoryName}/`
      : "/"
  : "/";

export default defineConfig({
  base: pagesBase,
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});