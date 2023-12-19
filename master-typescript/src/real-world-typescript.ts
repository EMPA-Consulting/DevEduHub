//7. REAL WORLD TYPESCRIPT

// DEBUGGING

// In complex error messages, the key information or the actual error is typically found in the final sentence or the last part of the message.

// It is recommended to use Pretty TypeScript Errors extension to make error messages easier to read.

// If a function has an error, navigate to its definition or use the Command + Click shortcut on the function name to view the associated error message.

// To explore the error message in detail, use the arrow keys. This allows you to move through the error message and toggle between the error details and the code.

// '@ts' comments instruct TypeScript compiler. For example, '@ts-ignore' skips type checking for the next line. Use sparingly to avoid hiding issues.
// Example:
// @ts-ignore
// const num: number = 'this is a string'; // TypeScript will ignore the type error on this line

// '@ts-expect-error' suppresses TypeScript errors on the next line. If the error gets fixed, TypeScript flags an error indicating the directive is no longer needed. Useful for planned fixes but use sparingly to avoid ignoring valid issues.
// You can add a description to '@ts-expect-error' to explain the expected error. This helps others understand the issue, even if it's been fixed. For example: // @ts-expect-error This will be a type error because we're assigning a string to a number //

/* ----------------------------------------------------------- */

// IMPORTING TYPES
// In TypeScript, you can export and import types between files. Use 'export' to make a type available for other files: 
// export type TypeName = {...}; // Then, in another file, use 'import' to use that type: // import { TypeName } from './path-to-file';

// In some rare cases, depending on wich bundler you are using, you may need to use 'import type' instead of 'import'. // import type { TypeName } from './path-to-file';

// When using a library that has not been written in TypeScript, you can install the type definitions for that library using npm.
// For example, to install the type definitions for the 'lodash' library, you would run: // npm i--save - dev @types / lodash
// In case the type definitions are not available, you can create your own type definitions for the library.

/* ----------------------------------------------------------- */

// DECLARATION FILES
// dom.d.ts is a declaration file that contains type definitions for the DOM. It is included by default in TypeScript projects.
// need to create a d.ts file for a library that doesn't have type definitions, you can use the 'declare' keyword to declare types for that library.
// usually you name the file after the library, for example, if you are creating type definitions for the 'lodash' library, you would name the file 'lodash.d.ts'.
// Then, you can declare types for that library in the file, for example: // declare module 'lodash' { export function random(min: number, max: number): number; }

// To override global types in TypeScript: 
// Create a declaration file'.d.ts' file (e.g., 'globals.d.ts') in your project root (TypeScript automatically includes this file).
// If TypeScript doesn't recognize the file, add 'export {}' at the end to ensure it's treated as a module.

// Using 'declare var', you can add global variables that are accessible throughout your project. 
// Example: // globals.d.ts // declare var myGlobalVar: MyType; // export {}; // Now 'myGlobalVar' can be used anywhere in your project.

export {};
