// Type Assertion in typescript simply tells the typescript compiler that you would like to treat an entity as a different type.

// syntax
// let variableName = <Type>value
// let name = <string>"ben"
// OR
// let name = "ben" as string

let uId : any = 1
// type assertion (1 way)
let user = <number>uId
// type assertion (2 way)
let user2 = uId as number