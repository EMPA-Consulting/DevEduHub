//4. TYPE MODIFIERS

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

export {};
