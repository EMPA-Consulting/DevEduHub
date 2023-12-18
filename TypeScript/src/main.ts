//BASIC TYPES

let a: number = 4 //always use lower case for number, strings, booleans...
let b = "sdf" //you don't need to declare the type, it's inferred
let c: boolean //you should declare the type if you don't initialize the variable

const d = 4 //const is a literal type, you can't change it's value

let e: number[] = [] //array of numbers, needs to be initialized even if its empty
e = [1, 2, 3] //you can assign a new array to the variable
e.push(4) //you can push new values to the array, TypeScript knows it's a number array and will not allow you to push a string

const f: [1, 2, 3] = [1, 2, 3] //f must be the values of 1, 2 and 3
f.push(2) //you can't push a new value to the array, but you can push 1, 2 or 3

const g = [1, 2, 3]
g.push(4) //you can push a new value to the array as it uses references instead of values

let h: any = 4 //any type, you can assign any value to it
h = "sdf" //you can change the value to a string
h = true //you can change the value to a boolean

const i = JSON.parse("skjhsf") //i is of type any, as JSON.parse can return any type

const person: {name: string; age: number, isProgrammer?: boolean} = { name: "John", age: 30 } //person is of type {name: string, age: number}
//isProgrammer is optional, you can add it or not
person.isProgrammer = true //you can add it later

type Person = {
    name: string
    age: number
    isProgrammer?: boolean
    friends: string[]
    address: {
        street: string
    }
} //you can create a type
const person2: Person = {
    name: "John",
    age: 30,
    friends: [],
    address: {
        street: "Main Street"
    }
} //person is of type Person
//const person3: Person = { name: "Jane", age: 32, friends: [] } //person is of type Person

interface Person2 {
    name: string
    age: number
    isProgrammer?: boolean
    friends: string[]
    address: {
        street: string
    }
} //you can create an interface, it has no = sign, but it works the same as type, it just uses objects while type can also use other values like number, string...

//FUNCTIONS TYPES

function printName (name: string, name2: string) { //must declare the type of the parameter
    console.log(name, name2)
}

function sum(j: number, k: number) { //must declare the type of the parameter and the return type
    return j + k
}
const l = sum(1, 2) //l is of type number as sum returns a number

function printPerson(person: {name: string}) {
    console.log(person.name)
}
printPerson({name: "John"}) //you can pass an object as a parameter
const person4 = {name: "Jane", age: 28} //age is defined but not used on our printPerson function, if we passed an object with age: 28, it would not work
printPerson(person4) //you can pass a variable as a parameter

function printPerson2(person: Person) { //you can use the type you created
    console.log(person.name)
}
printPerson2({name: "John" , age: 30, friends: [], address: {street: "Main Street"}})

function printName2(name:string) { //As it has no return, it's of type void
    console.log(name)
}
const m = printName2("John") //m is of type void, there is no return

function printNameAndAge(name: string, options?: {debugMode: boolean}) { //options is optional, you can pass it or not
    console.log(name, options)
}
printNameAndAge("sdf") //you can call the function without passing options