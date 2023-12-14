// NULL VS UNDEFINED
const a = null
/*a = undefined // error: Type 'undefined' is not assignable to type 'null' */

const b = undefined
/*b = null // error: Type 'null' is not assignable to type 'undefined' */

let c = undefined // or let c = null 
c = null || 4 || 'string' // ok: when a let variable has not been given a type or assigned an initial value, it is considered it can be anything (it woud be the same if we just declared: let c or)

/* ----------------------------------------------------------- */

// ARRAY TYPE
let array : number[] = [1,2,3] // array of numbers
let array1 = [1,2,3] // ts assumes array1 is an array of numbers.
let array2 = ['string', 'string1', 'string2'] // ts assumes array2 is an array of strings.
array.push(4) // ok
array1.push(4) // ok
array2.push('string3') // ok
/* array.push('string') // error: Argument of type '"string"' is not assignable to parameter of type 'number'. */
/* array2.push(4) // error: Argument of type '4' is not assignable to parameter of type 'string'. */

/* ----------------------------------------------------------- */

// ANY TYPE
// const result = JSON.parse('sjdhkasjdh') // ts assumes result is of type any because it doesn't know what the JSON.parse function returns.
// const result1 = fetch('skjdl').then(res => res.json()).then(data => console.log(data)) // ts assumes result1 is of type any because it doesn't know what the fetch function returns.

/* ----------------------------------------------------------- */

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

const person3 : Person = {name: 'Cris', age: 38, address: {street: 'salva', number: 77}} // ok
/* const person4: Person = 4 // error: Type '4' is not assignable to type 'Person'. */

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

/*Types are always spelled with a capital letter.
Types can be used to describe objects, functions, arrays, tuples, primitives, etc.
interfaces can only be used to describe objects. */

/* ----------------------------------------------------------- */

//FUNCTIONS
function sum(a: number, b: number) : number {
  return a + b  
}

function sum1(a: number, b: number) {
  return a + b
}

const sumResult= sum1(1,2) // ts infers that sumResult is of type number, because the function sum returns a number.

/* Never define the type of the return value of a function unless you absolutely need to
If ts can infer something and it works, it is recommended to go with the inference route, it is gonna be easier to maintain and more flexible. */

function sum2(a: number, b: number) {
  return 'blablabla'
}

const sumResult1 = sum2(1,2) // ts infers that sumResult1 is of type string, because the function sum returns a string, there is no need to define the type of the return value of the function.


function printClient (company:{name: string}) {
  console.log(company)
}

printClient({name: 'EMPA'}) // ok

const client = {name: 'EMPA', postalcode :'08001'}
printClient(client) // ok, ts only checks that the variable is an object that includes the property name. 
/* printClient({name: 'EMPA', postalcode :'08001'}) // error: Object literal may only specify known properties, and 'postalcode' does not exist in type '{ name: string; }'. */

type Client = {name : string}
function printClient1(client: Client){
  console.log(client.name)
}

printClient1({name: 'EMPA'}) // ok

/* ----------------------------------------------------------- */

//VOID TYPE
function printName(name: string){
  console.log(name)
}
const printedName = printName('Cris') // ok, the variable printedName is of type void.

/* If a function does not return anything, ts assumes it returns void. Javascript functions that do not return anything, return undefined. */

function printName1(name: string) {
  console.log(name)
  return undefined
}

// if you want a function to return undefined, you have to explicitly return undefined.

/* ----------------------------------------------------------- */

//OPTIONAL PARAMETERS
function printNameAndAge(name: string, age?: number) {
  console.log(name, age)
}
printNameAndAge('Cris', 38) // ok
printNameAndAge('Cris') // ok, because the parameter age is optional.

/* ----------------------------------------------------------- */

//DESTRUCTURED AND REST PARAMETERS
function printUser( name: string, {isAprogrammer = true}) {
  console.log(name, isAprogrammer)
}
/* printUser('Cris') // error: Expected 2 arguments, but got 1, isAprogrammer is missing. */

function printUser1( name: string, {isAprogrammer = true} = {}) {
  console.log(name, isAprogrammer)
}

printUser1('Cris') // ok, because the object is optional since it has assigned a default value of an empty object.

/* 
function printUser2( name: string, {isActive = true, level: number} = {}) {
  console.log(name, isActive)
}
// error: ts infers isActive is type boolean because it has a default value of true but can not infer the type of level because it has no default value.

When destructuring an object, providing a default value will assign a type. If there are paramaters with no default values, you need to create a manual type. */

type Options = {
  isActive?: boolean,
  level?: number
}

function printUser2(
  name: string,
  { isActive = true, level }: Options = {}
) {
  console.log(name, isActive, level);
}

printUser2('Cris'); // ok, because object is optional since it has assigned a default value of an empty object. It will print Cris, true, undefined.
printUser2('Cris', { level: 1 }); // ok, it will print Cris, true, 1.
printUser2('Cris', { isActive: false, level: 2 }); // ok, it will print Cris, false, 2.

/* ----------------------------------------------------------- */

function sumWithCallback(a: number, b: number, callback: (sum: number) => void) {
  callback(a + b)
}

sumWithCallback(1,2, (sum) => {
  console.log(sum)
})
// the function will print 3.

function greetUser(name: string, callback: (greeting: string) => void) {
  const greeting = "Hello, " + name;
  callback(greeting);
}

greetUser('Cris', (greeting) => {
  console.log(greeting);
});
// the function will print Hello, Alice.

type greeting = (greeting: string) => void

function greetUser1(name: string, callback: greeting) {
  const greeting = "Hello, " + name;
  callback(greeting);
}

greetUser1('Cris', (greeting) => {
  console.log(greeting)
})
//same as the example before but with a type defined for the callback.

/* ----------------------------------------------------------- */