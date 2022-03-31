

// String types

let names : string = "ben"

// Boolean

let visible : boolean = true

// Any Types

let age : any 
age = 34

// Array Number type: this would accept only number data-type
let arrs : number[] = []
arrs.push(1,2)

// Array Any type : this would accept any data-type
let anyarr : any[] = []

anyarr.push("fvfdv", 56, true)

// Tuple : any item added within a tuple array, must be in the same order as the tuple
// Valid

let person : [number, string, boolean] = [12,"sdcsd", true]

// Invalid : this would throw an error
let person2 : [number, string, boolean] = ["sdc",true, 12]

// Unions
let pid : string | number
pid = 34
pid = "dscdsc"
pid = true // error


// Objects
// Adding type to an object

const user : {
    id : number,
    name: string
} = {
    id: 1,
    name: "john"
}

// Refactor way

type User = {
    id: number,
    name: string
}

// This way, any property added which isnt included within the User type would throw an error

// Valid

const user2 : User = {
    id: 2,
    name: "john"
}

// Invalid
const user3 : User = {
    id: true, // error
    name: "john"
}

// Type Assertion :- this tells the compiler we wanna treat an entity as a different type

let cid : any = 1
let cusId = <number> cid
// or
let cusId2 = cid as number
cusId = "ben" // this would throw a type error cause the cusId except only a number

// Functions Type

function addNum(a: number, b: number) : number{
    return a+b
}

let sum = addNum(1,2)

// Void Type

function log(message : number | string) : void{
    return console.log(message);
}



// Interfaces :- This describe how an object or a function should look like. an interface defines the syntax that any entity must adhere to.

interface User2{
    name: string,
    id: number
}


const user4 : User2 = {
    id: 3, // error
    name: "john"
}

// Providing an optional interface property using ?

interface UserInter{
    id: number,
    age: number,
    dob?: string
}

const info : UserInter = {
    id: 22,
    age: 222
    // Even if we didnt provide the dob, we wouldnt get an error
}

// Readonly property within an interface

interface UserInter2{
    readonly id: number,
    age: number,
    dob?: string
}

const info2 : UserInter2 = {
    id: 22,
    age: 222
}

// this case, we cant reassigned the value of an id
info2.id = 2


// INTERFACES WITH FUNCTION

interface MathFunc{
    (x: number, y:number) : number
}

const addSum2 : MathFunc = (x: number, y:number) => x + y

