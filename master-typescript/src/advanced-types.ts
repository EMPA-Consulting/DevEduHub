// 5. ADVANCED TYPES

//AS CONST and ENUMS
const newMember = {
    name: 'Cris',
    age: 38,
    address: { 
      street: 'Main st',
    }
  } as const
  
  // By using 'as const', all properties of 'newMember' become readonly.
  // Attempting to modify any property of 'newMember' would result in an error.
  // newMember.name = 'John' // Error: Cannot assign to 'name' because it is a read-only property.
  
  
  const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Expert'] as const
  
  type Player = {
    name: string,
    skillLevel: typeof SKILL_LEVELS[number]
  }
  
  SKILL_LEVELS.forEach(skillLevel => {
    console.log(skillLevel)
  })
  
  // 'typeof SKILL_LEVELS' gets the type of the 'SKILL_LEVELS' array, which is ['Beginner', 'Intermediate', 'Expert']
  // this allows to acces each value of the skill level property of the Player type.
  // Without this, there would be no way to access each value of the 'skillLevel' property of the 'Player' type and use, for example, a forEach loop to iterate over them.
  // This approach is often recommended over traditional enums in TypeScript. It's more flexible, safer and JS-friendly.
  
  /* ----------------------------------------------------------- */
  
  //TUPPLES
  
  // A tuple in is a type that allows to express an array where the type of a fixed number of elements is known, but need not be the same.
  type TUPLE = [string, boolean]
  
  const newTuple : TUPLE = ['Cris', true]
  // const newTuple1 : TUPLE = [4, true] // Error: Type 'number' is not assignable to type 'string'.
  
  /* ----------------------------------------------------------- */
  
  // GENERICS
  // Generics allow you to write reusable code that can work over a variety of types, not just one.
  // Generics are often expressed using the letter 'T' (for 'Type'), but they can be any valid identifier.
  
  // Here, a generic is used to get the type of an HTML input element.
  const input = document.querySelector<HTMLInputElement>('#input')
  console.log(input?.value)
  
  // This function uses a generic 'ArrayType' to work with any type of array.
  // It returns the second element of the array.
  function getSecondValue<ArrayType>(array: ArrayType[]) : ArrayType {
    return array[1]
  }
  
  const nums = [1,2,3]
  const letters = ['a', 'b', 'c']
  
  // Here, the generic is specified as 'number'.
  const returnedNum = getSecondValue<number>(nums)
  // Here, the generic is specified as 'string'.
  const returnedLetter = getSecondValue<string>(letters)
  
  // Generics can also be used in type definitions.
  // Here, 'APIResponse' is a type that includes a generic 'T'.
  type APIResponse<T> = {
    data: T,
    isError: boolean
  }
  
  // 'APIResponse' can be used with any type.
  // Here, it's used with an object type representing a user.
  type UserResponse = APIResponse<{ name: string, age: number }>
  // Here, it's used with an object type representing a blog.
  type BlogResponse = APIResponse<{ title: string }>
  
  // 'UserResponse' and 'BlogResponse' can be used to type check responses.
  const response1 : UserResponse = {
    data: { name: 'Cris', age: 38 },
    isError: false
  }
  /* const response1 : UserResponse = {
    data: { name: 1 , age: 38},
    isError: false
  } // error: Type 'number' is not assignable to type 'string'. */
  
  const response2 : BlogResponse = {
    data: { title: 'My blog' },
    isError: false
  }
  
  /*  ----------------------------------------------------------- */
  
  //ASYNC FUNCTIONS
  // Generics can be used with async functions to specify the type of the value that the Promise resolves to.
  
  // Here, 'wait' is an async function that returns a Promise that resolves to a string.
  // The generic 'string' is used to specify that the Promise resolves to a string.
  function wait(duration: number) : Promise<string> {
    return new Promise<string>(resolve => {
      setTimeout(() => resolve('done'), duration)
    })
  }
  
  // 'wait' is called with a duration of 1000 milliseconds.
  // When the Promise resolves, the length of the resolved string is logged to the console.
  wait(1000).then(value  => {
    console.log(value.length)
  })
  
  // 'wait1' is an async function that returns a Promise that resolves to any value.
  // The generic 'any' is used because the type of the value that the Promise resolves to is not known.
  async function wait1(duration: number) : Promise<any> {
    await new Promise(resolve => setTimeout(resolve, duration));
    return await fetch('skjaksjdh')
  }
  
  // 'wait1' is called with a duration of 1000 milliseconds.
  // When the Promise resolves, the JSON body of the response is logged to the console.
  wait1(1000).then(value => {
    console.log(value.json())
  })
  
  // Async functions always return a Promise, even if you don't explicitly return a Promise.

  export {};