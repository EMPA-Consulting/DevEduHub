// TYPESCRIPT SIMPLIFIED

//1. SETUP

// WHAT IS TYPESCRIPT AND WHY USE IT?
// TypeScript: A JavaScript superset adding static types. It enhances code readability and predictability.
// Needs to be compiled to JavaScript for browsers.

// HOW TO INITIALIZE A TYPESCRIPT PROJECT
// 1. npm init -y
// 2. npm i --save-dev typescript // Install TypeScript as a dev dependency.
// 3. npx tsc --init // Create a tsconfig.json file with default configuration.
// 4. npx tsc <filename> // Compile TypeScript file to JavaScript.px tsc *filename.ts* --noEmitOnError // compiles the typescript file to javascript only if there are no errors.

// USING A BUNDLER
// Using Vite, a popular TypeScript bundler:
// 1. npm create vite@latest . // Create a project in the current folder.
// 2. Choose TypeScript for a vanilla project.
// 3. npm i // Install dependencies.
// 4. npm run dev // Run the project as a dev server.
// 5. npm run build // Build the project for production.
// 6. npm run preview // Preview the production version of the code.

// Vite handles the compiling, no need for 'npx tsc <filename>'.
// For cleanup, remove boilerplate files: 'vite.svg', 'counter.ts', 'style.css', 'typescript.svg' from the public folder, and also remove 'svg' references from 'index.html'.

// UNDERSTANDING THE TS CONFIG FILE

// 1. 'include': Specifies the files to be compiled.
// 2. 'target': Specifies the JavaScript version to compile to.
// 3. 'module': Specifies the module system to use.
// 4. 'lib': Specifies the libraries to use.
// 5. 'strict': Recommended to be true for better linting.
// More on tsconfig options: https://www.typescriptlang.org/tsconfig
// Different tsconfig bases: https://github.com/tsconfig/bases

export {};
