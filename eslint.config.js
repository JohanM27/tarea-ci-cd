// @ts-check

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly"
      }
    },
    rules: {
      // Puedes agregar reglas personalizadas aquí
    }
  }
];
