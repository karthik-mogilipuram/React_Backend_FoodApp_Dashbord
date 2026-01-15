/* Minimal ESLint flat config for a React project */
const js = require("@eslint/js");
const reactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  {
    ...js.configs.recommended,
    ignores: ["node_modules/**", "dist/**"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { require: "readonly", module: "writable", document: "readonly", window: "readonly" },
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
