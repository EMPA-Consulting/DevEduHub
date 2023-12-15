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
  console.log(a, b)
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

// UNIONS
let id : number | string
id = 7 // ok
id = '7' // ok

type Todo = {
  name: string,
  status: 'complete' | 'incomplete'
}

let task1 : Todo = {
  name: 'Laundry',
  status: 'complete'
}
// ok, status can only be completed or incompleted.


/*let task2 : Todo = {
  name: 'Laundry',
  status: 'in progress'
}
// error: Type '"in progress"' is not assignable to type '"complete" | "incomplete"' */


type Meeting = {
  name: string,
  time: number
}

type TodoOrMeeting = Todo | Meeting

let task3 : TodoOrMeeting = {
  name: 'Laundry',
  status: 'complete'
}

/* union types are useful when you want to have a variable that can be of different types.
Unions can not be used with interfaces. */

/* ----------------------------------------------------------- */

//INTERSECTIONS

type Visitor = {
  name: string,
  age: number
}

type VisitorWithId = Visitor & {id: string}

const visitor1 : VisitorWithId = {
  name: 'Cris',
  age: 38,
  id: '1'
}
// ok. Intersections are useful to add properties to an existing type.

/* const visitor2 : VisitorWithId = {
  name: 'Cris',
  age: 38,
}
// error: Property 'id' is required in type VisitorWithId.*/

type VisitorWithIdAndPhone = VisitorWithId & number

/*const visitor3 : VisitorWithIdAndPhone = {name: 'Cris', age: 38, id: '1', 666666666}
// error: You can not have a type intersection with a primitive type, it does not make sense to have a type that is both a number and an object. */

type VisitorData = Visitor & {name: number}
/* const visitor4 : VisitorData = {name: 'Cris', age: 38}
// error: property name is already defined in type Visitor as a string. Same property names can not have different types. */ 

interface NewVisitor {
  name: string,
  age: number
}

interface Status {
  status: string
}

interface NewVisitorWithId extends NewVisitor, Status {id: string}

const visitor5 : NewVisitorWithId = {
  name: 'Cris',
  age: 38,
  status: 'active', 
  id: '1'
}
// ok. To add properties or other types to an existing interface, you need to use the extends keyword.

/* ----------------------------------------------------------- */

//READONLY
type NewUser = {
  readonly id: number,
  name: string, 
  age: number
}

const newUser : NewUser = {
  id: 1,
  name: 'Cris',
  age: 38
}
/* person.id = 2 // error: Cannot assign to 'id' because it is a read-only property, it can not be modified. */

type ArrayOfNumbers = readonly number[]

const arrayOfNumbers : ArrayOfNumbers = [1,2,3]
/* arrayOfNumbers.push(4) // error: Property 'push' does not exist on type 'readonly number[]'. Properties of ArrayOfNumbers can not be modified. */

/* ----------------------------------------------------------- */

//KEYOF

type NewPerson = {
  name: string,
  age: number
}

function getValue(key: keyof NewPerson, person: NewPerson) {
  return person[key]
}

const age = getValue('age', {name: 'Cris', age: 38})

/*  const age = getValue('status', {name: 'Cris', age: 38})
// Key in getValue function can only be name or age, because they are the only properties of NewPerson. */

/* ----------------------------------------------------------- */

//TYPEOF
const newClient = { name: 'Cris', age: 38 }
const ListOfClients : typeof newClient[] = []

const newClient1 = { name: 'John', age: 40 }

ListOfClients.push(newClient) // ok. ListOfClients is an array of objects with the same properties as newClient.
/* ListOfClients.push(2) // error: Argument of type '2' has not the same properties as newClient. */

function sayHello(name: string) {
  console.log('Hello ' + name)
}

type GreetingFunction = typeof sayHello // GreetingFunction has the same type as sayHello function. It is a function that takes a string and returns void.

/* ----------------------------------------------------------- */

//INDEX TYPES

type Guest = {
  name: string,
  skillLevel: 'Beginner' | 'Intermediate' | 'Expert'
}
const guest1: Guest = { name: 'Cris', skillLevel: 'Beginner' }


function printSkillLevel( skillLevel: Guest['skillLevel']) {
  console.log(skillLevel)
}
// Function 'printSkillLevel' accepts a parameter of type 'Guest['skillLevel']'
// Guest['skillLevel']' is an index type, which extracts the type of 'skillLevel' property from 'Guest'

printSkillLevel(guest1.skillLevel) // This is valid because 'guest1.skillLevel' is of type 'Guest['skillLevel']'

printSkillLevel('Beginner') //  This is valid because 'Beginner' is one of the possible values of 'Guest['skillLevel']'
/* printSkillLevel(4) // error: '4' is not a valid value of 'Guest['skillLevel']', it can only be 'Beginner' | 'Intermediate' | 'Expert'. */

type GuestsGroupedBySkillLevel = {
  [index in Guest['skillLevel']] : Guest[]
}
// GuestsGroupedBySkillLevel is an object that has a property for each possible value of Guest['skillLevel'].

const group1 : GuestsGroupedBySkillLevel = {
  Beginner: [{name: 'Cris', skillLevel: 'Beginner'}],
  Intermediate: [{name: 'John', skillLevel: 'Intermediate'}],
  Expert: [{name: 'Mary', skillLevel: 'Expert'}]
}

/* const group2 : GuestsGroupedBySkillLevel = {
  Beginner: [{name: 'Cris', skillLevel: 'Beginner'}],
  Intermediate: [{name: 'John', skillLevel: 'Intermediate'}],
}
// error: Property 'Expert' is required in type 'GuestsGroupedBySkillLevel'. */

type GuestsGroupedByNumber = {
  [index: number]: Guest[]
}
// GuestsGroupedByNumber is an object that has a property for each number.

const group3 : GuestsGroupedByNumber = {
  1: [{name: 'Cris', skillLevel: 'Beginner'}],
  2: [{name: 'John', skillLevel: 'Intermediate'}],
}

/* const group4 : GuestsGroupedByNumber = {
  'one': [{name: 'Cris', skillLevel: 'Beginner'}],
  'two': [{name: 'John', skillLevel: 'Intermediate'}],
}
// error. index type can only be a number. */

const NewGuest = {
  name: 'Cris',
  age: 38,
  isProgrammer: true
}

type AllNewGuestData = (typeof NewGuest)[keyof typeof NewGuest]
// Define a type 'AllNewGuestsData' using index types
// 'typeof NewGuest' gets the type of the 'NewGuest' object, which is { name: string, age: number, isProgrammer: boolean }
// 'keyof typeof NewGuest' gets the keys of this type, which are 'name', 'age', and 'isProgrammer'
// (typeof NewGuest)[keyof typeof NewGuest]' represents the types of all values in 'NewGuest', which are string, number, and boolean
// 'AllNewGuestsData' is a union type that can be either string, number, or boolean

// Define an array 'NewGuests' with objects that have properties 'name', 'age', and 'isProgrammer'

const NewGuests = [
  { name: 'Cris', age: 38, isProgrammer: true },
  { name: 'John', age: 25, isProgrammer: false },
]

type AllNewGuestsData = (typeof NewGuests)[number]
// 'number' is used as the index type because arrays are indexed by numbers in JavaScript and TypeScript
// '(typeof NewGuests)[number]' represents the type of an element in 'NewGuests', which is { name: string, age: number, isProgrammer: boolean }

