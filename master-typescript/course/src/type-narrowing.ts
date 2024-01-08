// 6. TYPE NARROWING

// BASIC TYPE GUARDS

type Exercise = {
    title: string
    priority: 'high' | 'medium' | 'low'
    isCompleted: boolean
    description?: string
    dueDate: Date | string
  }
  
  // Function to get due date. Uses typeof to handle both string and Date types.
  function getDueDate(exercise: Exercise) {
    if (typeof exercise.dueDate === 'string') {
      console.log(exercise.dueDate)
    }
    else {
      console.log(exercise.dueDate.toString())
    }
  }
  // In case the type of exercise.dueDate is not string, it is assumed to be Date in the else statement and ts provides access to the methods of the Date object (e.g. toString).
  
  // Similar to getDueDate, but uses instanceof instead of typeof.
  function getDueDate1(exercise: Exercise) {
    if (exercise.dueDate instanceof String) {
      console.log(exercise.dueDate)
    }
    else {
      console.log(exercise.dueDate.toString())
    }
  }
  
  // As description is an optional property, is necessary to check if it exists before accessing its properties:
  function getDescription(exercise: Exercise) {
    if (exercise.description != undefined) {
      exercise.description.length
    } else {
      console.log(exercise.description) // 'undefined'
    }
  }
  
  // Similar to getDescription, but uses optional chaining (?.) for simplicity.
  function getDescription1(exercise: Exercise) {
    exercise.description?.length
  }
  
  // Both functions are equivalent. The ?. operator can be used to access a property only if it exists.
  // If there is no description property, the function will return undefined.
  
  const form  = document.querySelector<HTMLFormElement>('.form')
  form?.addEventListener('submit', () => {})
  // In this case, if the form does not exist, an error will be thrown to warn that the form is null.
  
  const form1  = document.querySelector<HTMLFormElement>('.form')
  form!.addEventListener('submit', () => {})
  // Adding ! after form tells TypeScript that is it impossible for form to be null. 
  // This is not recommended, as it overrides TypeScript's type checking.
  
  // Function to handle exercise based on priority. Uses switch statement for type narrowing.
  function extendExercise(exercise: Exercise) {
    switch (exercise.priority) {    
      case 'high':
        console.log(exercise.priority)
        break
      case 'medium':
        console.log(exercise.priority)
        break
      case 'low':
        console.log(exercise.priority)
        break
    }
  }
  // It would be impossible to add more cases to the switch statement without updating the type of exercise.priority.
  
  /* ----------------------------------------------------------- */
  
  // NEVER TYPE
  
  type Assignment = {
    priority: 'high' | 'medium' | 'low'
  }
  
  function extendAssignment(assignment: Assignment) {
    switch (assignment.priority) {
      case 'high':
        console.log(assignment.priority)
        break
      case 'medium':
        console.log(assignment.priority)
        break
      case 'low':
        console.log(assignment.priority)
        break
      default:
        const error: never = assignment.priority
        console.log(error)
        break
    }
  }
  // The use of never type in the default case of the switch statement is a way to ensure that all possible cases are handled.
  // It there is a value that is not handled by the switch statement, an error will be thrown, becasuse the default type could not be assigned to never type.
  
  /* ----------------------------------------------------------- */
  
  // UNKNOWN TYPE
  
  //Unknown is used as a type-safe alternative to any
  
  function getDataLength ( data: unknown) {
    if( data != null &&
      typeof data === 'object' &&
      "name" in data &&
      typeof data.name === 'string'
    ) {
      console.log(data.name.length)
    }
  }
  // This function checks if data is not null, is an object, has a property "name", and "name" is a string.
  // These checks are necessary because 'unknown' could be any type, and we can't directly access properties or methods on 'unknown'.
  
  /* ----------------------------------------------------------- */
  
  // AS CASTING
  
  type Operation = {
    name: string
  }
  
  fetch('jaksdjlasd').then(res => res.json()).then((data: Operation) => {
    // Use 'as' to cast 'data' to the 'Operation' type.
    // This tells TypeScript to treat 'data' as an 'Operation', even though it can't verify this (it returns a Promise)
    return data as Operation
  }).then (data => {
    // Now we can safely access the 'name' property.
    console.log(data.name)
  })
  
  // This is not recommended, as casting bypasses TypeScript's type checks. It's better to use type guards to check the type of 'data' before using it.
  
  /* ----------------------------------------------------------- */
  
  // SATISFIES
  
  type Challenge = {
    title: string
    dueDate: string | Date
    iscCompleted: boolean
  }
  
  const challenge : Challenge = {
    title: 'Finish TypeScript course',
    dueDate: new Date(),
    iscCompleted: false
  } 
  
  // Trying to call 'setDate' on 'challenge.dueDate' would cause an error. TypeScript knows 'dueDate' could be a string, and 'setDate' is not a method on string.
  // challenge.dueDate.setDate(1)
  
  const challenge1 = {
    title: 'Finish TypeScript course',
    dueDate: new Date(),
    iscCompleted: false
  } satisfies Challenge
  
  // Now we can call 'setDate' on 'challenge1.dueDate'. TypeScript knows that 'dueDate' is a Date in this context, so it allows the 'setDate' method.
  challenge1.dueDate.setDate(1) // This works because TypeScript understands that 'dueDate' is a Date here, not a string.
  
  // satisfies keyword can be useful when you want to ensure that an object has certain properties, but you also want to provide more specific type information for some of those properties
  
  /* ----------------------------------------------------------- */
  
  // DISCRIMINATED UNIONS
  
  type UserApiResponse = {
    status: 'Error' | 'Success' // This is the discriminant property.
    data? : { id: string, name: string } // This is present only on success.
    errorMessage? : string // This is present only on error.
  }
  
  /* 
  // This function will throw error:  
  
  function handleResponse(res: UserApiResponse) {
    if (res.status === 'Success') {
      // TypeScript doesn't know that 'data' is defined when 'status' is 'Success'. So, it throws an error because 'data' is marked as optional in 'UserApiResponse'.
      console.log(res.data.name) 
    } else {
      // Similarly, TypeScript doesn't know that 'errorMessage' is defined when 'status' is 'Error'. So, it throws an error because 'errorMessage' is marked as optional in 'UserApiResponse'.
      console.log(res.errorMessage.length)
    }
  }
  */
  
  // Define a type for a successful response. It has a 'status' of 'Success' and 'data'.
  type SuccessResponse = {
    status: 'Success'
    data: { id: string, name: string }
  }
  
  // Define a type for an error response. It has a 'status' of 'Error' and an 'errorMessage'.
  type ErrorResponse = {
    status: 'Error'
    errorMessage: string
  }
  
  // Define a type that can be either a SuccessResponse or an ErrorResponse. This is a discriminated union.
  type UserApiResponse1 = SuccessResponse | ErrorResponse
  
  // Function to handle the response. It checks the 'status' property (the discriminant) to determine the type of the response.
  function handleResponse(res: UserApiResponse1) {
    if (res.status === 'Success') {
      // TypeScript now knows that 'data' is defined when 'status' is 'Success'. So, it allows accessing 'data.name'.
      console.log(res.data.name)
    } else {
      // Similarly, TypeScript now knows that 'errorMessage' is defined when 'status' is 'Error'. So, it allows accessing 'errorMessage.length'.
      console.log(res.errorMessage.length)
    }
  }
  
  // Discriminated unions only work with literal values (like 'Success' and 'Error'), not with variables types (like 'string' and 'number').
  
  /* ----------------------------------------------------------- */
  
  // FUNCTION OVERLOADS
  
  // Function overloads allow a function to have different signatures, 
  // meaning it can accept different types and number of parameters and return different types.
  
  // Here we define two overloads for the 'add' function.
  // The first overload accepts an array of numbers and returns a number.
  function add(nums: number[]): number
  
  // The second overload accepts two numbers and returns a number.
  function add(a: number, b: number) : number
  
  // This is the actual function implementation. It must be compatible with all the overloads.
  // It accepts either an array of numbers or a single number as the first parameter, and an optional number as the second parameter.
  function add(a: number | number[], b?: number): number{
    // If 'a' is an array, we sum all the numbers in the array.
    if (Array.isArray(a)) {
      return a.reduce((acc, val) => acc + val, 0)
    }
    // If 'b' is not null, we add 'a' and 'b'.
    if ( b != null)
    return a + b
  
    // If 'b' is null, we just return 'a'.
    return a
  }
  
  // Here we use the first overload of 'add'. We pass an array of numbers and get a number.
  const add1 = add([1,2,3])
  
  // Here we use the second overload of 'add'. We pass two numbers and get a number.
  const add2 = add(1,2)
  
  // const add3 = add([1,2,3], 4) // 
  // This  would cause an error because it doesn't match any of the overloads.
  
  /* ----------------------------------------------------------- */
  
  // TYPE PREDICATE FUNCTION
  
  type Admin = {
    name: string
  }
  
  type Job = {
    title: string
  }
  
  // Define a function that accepts either an Admin or a Job.
  // It checks if the 'name' property exists in the object, and if so, it prints the name, otherwise it prints the title.
  function print(obj: Admin | Job) {
    if ('name'in obj) {
      console.log(obj.name)
      return
    }
     console.log(obj.title)
     return
  }
  
  /*
  // If we try to define the same function with 'unknown' as the type of 'obj', we get an error.
  // We can't access any properties of 'obj' without first asserting or narrowing to a more specific type.
  
  function print(obj: unknown) {
    if ('name'in obj) {
      console.log(obj.name)
      return
    }
     console.log(obj.title)
     return
  }
  */ 
  // error: Property 'name' does not exist on type 'unknown'. Property 'title' does not exist on type 'unknown'.
  
  // Define a type predicate function. This is a function that returns a boolean indicating whether an object is of a certain type.
  // In this case, 'isAdmin' checks if 'obj' is an Admin.
  // The 'obj is Admin' syntax is the type predicate. It tells TypeScript that if this function returns true, then 'obj' is an Admin.
  function isAdmin(obj: Admin | Job) : obj is Admin {
    return 'name' in obj
  }
  
  // Predicates are not entirely recommended, they override TypeScript's type checks, so can lead to errors if not used carefully.

  export {};