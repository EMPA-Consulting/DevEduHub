//6. BUILT IN TYPES

// PICK AND OMIT
type Project = {
    id: string
    name: string,
    status: string,
    completed: boolean
  }
  // Pick and Omit are utility types that can be used to create new types from existing types.
  type newProject = Pick<Project, 'name' | 'status' | 'completed'> // newProject is a type that has the same properties as Project, but only the ones specified in the Pick method.
  type newProject1 = Omit<Project, 'id'> // newProject1 is a type that has the same properties as Project, but without the ones specified in the Omit method. 
  
  // In case more properties are added in Project type, newProject would remain the same, newProject1 would automatically update and continue omitting just the id property.
  
  /* ----------------------------------------------------------- */
  
  // PARTIAL AND REQUIRED
  
  type Activity = {
    title: string,
    completed: boolean
    address?: {
      street?: string,
      number: number
    }
  }
  
  // Partial and Required are utility types that can be used to create new types from existing types.
  type ActivityForm = Partial<Activity> // ActivityForm is a type that has the same properties as Activity, but all of top level properties are optional.(title and completed)
  type ActivityForm1 = Required<Activity> // ActivityForm1 is a type that has the same properties as Activity, but all of top level properties are required.(title and completed)
  
  type Game = {
    title: string,
    completed: boolean
    address?: {
      street?: string,
      number: number
    }
  }
  
  // RequiredGame makes the specified keys of T required. 
  // It first picks the specified key from T using Pick, then makes it required using Required.
  // Finally, it merges this with T using the & operator.
  type RequiredGame<T, Key extends keyof T> = Required<Pick<T, Key>> & T
  
  // PartialPick makes the specified keys of T optional.
  // It first picks the specified key from T using Pick, then makes it optional using Partial.
  // It then omits this key from T using Omit, and finally merges the two using the & operator.
  type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>
  
  // GameForm is a type based on Game, but with 'title' made optional.
  type GameForm = PartialPick<Game, 'title'>
  const game : GameForm = {
    completed: true  
  }
  
  // GameForm1 is a type based on Game, but with 'title' made required.
  type GameForm1 = RequiredGame<Game, 'title'>
  
  // Title must be provided when creating a GameForm1, because 'title' is required in GameForm1.
  const game1 : GameForm1 = {
    title: 'Chess',
    completed: true
  }
  /*const game1 : GameForm1 = {
    completed: true
  } // error: Property 'title' is missing in type '{ completed: true; }' but required in type 'RequiredGame<Game, "title">'. */
  
  /* ----------------------------------------------------------- */
  
  // RETURNTYPE AND PARAMETERS
  
  function checkLength(a: string, b: number) {
    return a.length < b
  }
  // checkLenth function takes 2 parameters, a string and a number, ts infers that this function returns a boolean.
  // If the length of the string is less than the number, it returns true, otherwise it returns false.
  
  type returnCheckLength = ReturnType<typeof checkLength>
  // ReturnType is a utility type that can be used to get the return type of a function.
  // In this case, returnCheckLength is a boolean, because checkLength function returns a boolean.
  
  type parametersCheckLength = Parameters<typeof checkLength>
  // Parameters is a utility type that can be used to get the parameter types of a function.
  // In this case, parametersCheckLength is a tuple of type [string, number], because checkLength function takes 2 parameters, a string and a number.
  
  /* ----------------------------------------------------------- */
  
  // RECORD
  
  type Member = {
    name: string,
    age: number     
  } 
  
  // Define a MembersGroupedByName type using the Record utility type.
  // Record<K, T> creates a new type with keys of type K and values of type T.
  // In this case, MembersGroupedByName is a type with keys of type string and values of type Member[] (array of Member).
  type MembersGroupedByName = Record<string, Member[]>
  
  // We can now create a MembersGroupedByName object.
  // Each property key is a string (the group name), and each property value is an array of Member.
  const members : MembersGroupedByName = {
    'group1': [{name: 'Cris', age: 38}],
    'group2': [{name: 'John', age: 25}]
  }
  
  // The Record utility type is a shorthand for creating types of objects that have a certain shape.
  // The following type definition would be equivalent to the Record definition above:
  /*
  type MembersGroupedByName = {
    [index: string]: Member[]
  }
  */
  // This is a more verbose way of defining the same type. It says that a MembersGroupedByName object can have any number of properties,
  // as long as each property key is a string and each property value is an array of Member.
  
  /* ----------------------------------------------------------- */
  
  // READONLY
  
  type Task = {
    title: string,
    completed: boolean    
  }
  
  // FinalTask: A version of Task where all properties are readonly.
  // This means once a FinalTask object is created, its properties cannot be changed.
  type FinalTask = Readonly<Task>
  
  // Creating a FinalTask object. Its properties are readonly, so they can't be changed after creation.
  const task5 : FinalTask = {
    title: 'Laundry',
    completed: false  
  }
  
  // 'as const' is a TypeScript syntax to make all properties of an object readonly.
  // This is useful when you want an object to be immutable.
  const task = {
    title: 'Laundry',
    completed: false
  } as const
  
  // 'task' is now a readonly object, similar to a FinalTask object.
  
  // Object.freeze is a JavaScript method that makes an object's properties readonly.
  // Unlike 'readonly' and 'as const', Object.freeze works at runtime, not just at compile time.
  Object.freeze(task)
  
  // Object.freeze is often used when you need to ensure an object remains unchanged during runtime.
  // 'readonly' and 'as const' are TypeScript features that provide compile-time immutability.
   
  /* ----------------------------------------------------------- */
  
  // AWAITED
  
  async function doSomething () {
    return 3
  }
  
  type Returnedvalue = Awaited<ReturnType<typeof doSomething>>
  
  // Awaited is a utility type that can be used to get the type of a Promise's resolved value.
  // In this case, Returnedvalue is a number, because doSomething returns a Promise that resolves to a number.

  export {};
  