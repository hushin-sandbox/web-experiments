import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([".vinext/**", "dist/**", "build/**"]),
]);

export default eslintConfig;
