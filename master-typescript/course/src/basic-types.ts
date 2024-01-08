
// 2. BASIC TYPES

// TypeScript allows explicit type annotations. Always use lowercase for basic types.
// Uppercase is reserved for TypeScript's own types (like 'String' object wrapper).

let company: string = 'EMPA'; // 'company' is explicitly typed as a string

// TypeScript can also infer types based on the initial value.

let year = 2023 // TypeScript infers 'year' is of type number
year = 2024; // OK, because 2024 is a number
// year = 'string'; // Error: Type '"string"' is not assignable to type 'number'.

// TypeScript's IntelliSense shows available methods and properties for a type.
// For example, typing 'number.' will show methods like 'toFixed', 'toPrecision', etc.

// When you declare a const variable and assign it a primitive value, it becomes a literal type.
// This means the variable can only have that specific value and cannot be reassigned.

const letter = 'a'; // 'letter' is of type 'a', not string
// letter = 'b'; // Error: Cannot assign to 'letter' because it is a constant.

// This doesn't apply to const variables assigned to objects, because objects are mutable.
// Even though the variable itself cannot be reassigned, the properties of the object can be changed.

// In TypeScript, `null` and `undefined` are subtypes of all other types. 
// That means you can assign `null` and `undefined` to something like `number`.

// When you declare a const variable and assign it `null` or `undefined`, TypeScript infers it as that exact value and nothing else can be assigned to it.

const a = null;
// a = undefined; // Error: Type 'undefined' is not assignable to type 'null'.
// 'a' is inferred as 'null', not 'null | undefined' or any other type.

const b = undefined;
// b = null; // Error: Type 'null' is not assignable to type 'undefined'.
// 'b' is inferred as 'undefined', not 'null | undefined' or any other type.

// When you declare a variable with `let` and assign it `null` or `undefined`, TypeScript infers it as 'any' type (unless you have the `--strictNullChecks` or `--strict` flag enabled.)
let c = undefined; // or let c = null 
c = null || 4 || 'string'; // OK, 'c' can be anything because its type was inferred as 'any'.
/* ----------------------------------------------------------- */

// ARRAY TYPE
let array : number[] = [1,2,3] // Array of numbers

// TypeScript can infer array types from the initial elements.
let array1 = [1,2,3] // TypeScript infers this as an array of numbers.
let array2 = ['string', 'string1', 'string2'] // TypeScript infers this as an array of strings.

// Adding elements of the correct type is fine.
array.push(4) // ok
array1.push(4) // ok
array2.push('string3') // ok

// Adding elements of the wrong type causes an error:

// array.push('string') // error: 'string' is not assignable to parameter of type 'number'. //
// array2.push(4) // error:'4' is not assignable to parameter of type 'string'. //

/* ----------------------------------------------------------- */

// ANY TYPE
// When TypeScript can't predict the type, it uses 'any'.

// JSON.parse can return any JavaScript value, so its result is 'any'.
const result = JSON.parse('someString'); // TypeScript infers 'result' as 'any'.

// Fetch API returns a Promise. Without explicit typing, TypeScript can't predict the shape of the resolved value.
const result1 = fetch('someURL').then(res => res.json()).then(data => console.log(data)); // TypeScript infers 'result1' as 'any'.

// 2. BASIC TYPES

// OBJECT BASICS
const person = {name : 'Cris', age: 38} // ts assumes person is of type {name: string, age: number}
person.name = 'Cristina' // ok
/* person.isAprogrammer = true // error : Property 'isAprogrammer' does not exist on type '{ name: string; age: number; }' */

let person1 : {name : string, age: number, isAprogrammer: boolean} 
/* person1 = {name: 'Cris', age: 38} // error: person1 is missing the property isAprogrammer */
person1 = {name : 'Cris', age: 38, isAprogrammer: true} // ok

let person2 : {name : string, age: number, isAprogrammer?: boolean} // ? means optional property. If the property is not present, it will be undefined.
person2 = {name: 'Cris', age: 38} // ok because isAprogrammer is optional. person2.isAprogrammer will be undefined.

/* ----------------------------------------------------------- */

// TYPES VS INTERFACES
type Person = {
  name : string, 
  age: number, 
  isAprogrammer?: boolean,
  address:{
    street: string,
    number: number
  }
}

const person3 : Person = {name: 'Cris', age: 38, address: {street: 'Main st', number: 77}} // ok
// const person4: Person = 4 // error: Type '4' is not assignable to type 'Person'. //

type PhoneNumber = number
const myPhoneNumber : PhoneNumber = 666666666 // ok

interface User {
  name : string, 
  age: number, 
  isAprogrammer?: boolean,
  address:{
    street: string,
    number: number
  }
}

// Types are always spelled with a capital letter.
// Types can be used to describe objects, functions, arrays, tuples, primitives, etc.
// Interfaces can only be used to describe objects. 

export {}; 
