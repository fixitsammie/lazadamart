import js from "@eslint/js";
import nextPlugin from "eslint-config-next";

export default [
  js.configs.recommended,
  nextPlugin,
  {
    rules: {
      // Optional: warn if styled-jsx is missing in package.json
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: ["**/*.test.js", "**/*.config.js"] },
      ],

      // React/JSX rules
      "react/jsx-uses-react": "off", // Next.js with React 17+
      "react/react-in-jsx-scope": "off", // Next.js handles React import automatically
    },
  },
];
