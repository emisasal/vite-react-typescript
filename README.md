# React + TypeScript + Vite

## Differences with CRA

- Instead of bundling all the JS modules, CSS and other assets (Webpack does this with every change and can get very slow in big projects); Vitetakes advantage of ES Modules and serves directly to the browser (type="module" in /index.html).
- Uses Rollup to bundle files for production (npm run build).
- Vite uses `React plugin` instead of Webpack, resulting in a faster experience.

## Start new project

`npm create vite@latest new-project-name`

After executing the script Vite asks for the project configurations:

- Select a framework (React)
- Select a variant (JavaScript / TypeScript)

## Folder structure

```
/public
/src
  main.tsx
eslint.config.js
index.html
tsconfig.app.json
tsconfig.app.tsbuildinfo
tsconfig.json
tsconfig.node.json
tsconfig.node.tsbuildinfo
vite.config.ts
```

- **/public**: Folder to store static assets like images, fonts and icons.
- **/src**: Folder to store all the project code.
- **/src/main.tsx**: The entry point for React. Imports the App component and renders the Dom with `ReactDOM.render()` method.
- **index.html**: Located at the root of the project. Straightforward html file with `type:"module"` and `src` with `main.tsx` file path in a script tag, and a single div with id "root".

- **vite.config.ts**: Vite configurations for the project. Loads Vite plugins (like `react`), configures the server port (for example, 3000 instead of default 5173) and add a proxy for production API.

## Env variables

Vite uses dotenv internally to handle env files.

```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

The variables are loaded using `import.meta.env.NAME_OF VARIABLE`.
Only the variables starting with "VITE_" can be rendered on the client. 
Otherwise, the value will be undefined.

## Staging mode

For staging environment create a script executing build adding `--mode staging`. This changes the mode and loads the env file `.env.staging`.

---

**This is the official documentation:**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react"

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
})
```

---
