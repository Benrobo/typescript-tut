
// The unknown type is just like the 'any' type in typescript. 

// The only difference between unknown and any type is that, unknown type is much more restrictive.

// onlike any type which is much more flexible than unknown type.

let userInput : unknown;

userInput = "welcome"
userInput = 2

// doing this below would lead to an error

let userName : string;
// userName = userInput

// this can  however be solved by making a type checking on the variables.
if (typeof userInput === "string") {
    userName = userInput
}
