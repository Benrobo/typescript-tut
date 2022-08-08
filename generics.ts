// Generics in typescript allows creation of reusable block of codes which can be used with different types

// for eg

type FT = number[]


function last(arr: FT){
    return arr[arr.length -1]
}

const l = last([1,2,3,4]) // This should give us the last number which is 4

// But what if we would like this same function mentioned above to accept arrays of strings, how do we do that.

// const l2 = last(["a", "b", "c"]) // Typescript would throw an error cause the function only accepts arrays of numbers not strings.

// This is where Generics comes into play.
// Here T could be any name, but T simply refer to the type which would later be infered based on the values passed in.


// GENERIC SYNTAX

// Type<type> => Array<number>


// ARRAY GENERICS.

const  last2 = <T>(arr: Array<T>) => {
    return arr[arr.length - 1]
}

const l3 = last2([1,2,3,4]) // This should work without any linting erros

const l4 = last2(["a", "b", "c"]) // This should work without any linting errors.



function makeArr<Type>(val: Type ) {
    return [val]
}

const test = makeArr<number>(4)
const test2 = makeArr<string>("a")

// Extending Types

// let assume we would like to create a function which returns an object having the fullName key and value of the combination of first and last name.

interface FullName1 {
    fName: string,
    lName: string
}


const makeFullName2 = (obj: FullName1)=>{
    return {
        ...obj,
        fullname: obj.fName + " " + obj.lName
    }
}

const v1 = makeFullName2({fName: "ben", lName: "robo"}) // doing it this way would work fine.

// but what if we would like to extends the object argument by adding a different value which doesnt exists on the type defined.

// const v2 = makeFullName2({fName: "ben", lName: "robo", age: 20}) // adding extra property within our object which isnt defined within the object type would throw an error.

// the only way out is using Generic Object Type
interface FullName2 {
    fName: string,
    lName: string
}

const makeFullName = <T extends FullName2>(obj: T)  =>{
    return {
        ...obj,
        fullname: obj.fName + " " + obj.lName
    }
}

const comb = makeFullName({fName: "ben", lName: "robo", age: 30})


// Gnerics Interfaces

interface Tab<T>{
    id: string;
    position: number;
    data: T
}

type NumberTab = Tab<number>


// Generics in React
// check the App.tsx file