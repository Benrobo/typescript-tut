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


function genHash<Type>(pwd: Type[] ) {
    return [pwd.length]
}

const test = genHash(["123"])

