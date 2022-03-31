"use strict";
// String types
let names = "ben";
// Boolean
let visible = true;
// Any Types
let age;
age = 34;
// Array Number type: this would accept only number data-type
let arrs = [];
arrs.push(1, 2);
// Array Any type : this would accept any data-type
let anyarr = [];
anyarr.push("fvfdv", 56, true);
// Tuple : any item added within a tuple array, must be in the same order as the tuple
// Valid
let person = [12, "sdcsd", true];
// Invalid : this would throw an error
let person2 = ["sdc", true, 12];
// Unions
let pid;
pid = 34;
pid = "dscdsc";
pid = true; // error
// Objects
// Adding type to an object
const user = {
    id: 1,
    name: "john"
};
// This way, any property added which isnt included within the User type would throw an error
// Valid
const user2 = {
    id: 2,
    name: "john"
};
// Invalid
const user3 = {
    id: true,
    name: "john"
};
// Type Assertion :- this tells the compiler we wanna treat an entity as a different type
let cid = 1;
let cusId = cid;
// or
let cusId2 = cid;
cusId = "ben"; // this would throw a type error cause the cusId except only a number
// Functions Type
function addNum(a, b) {
    return a + b;
}
let sum = addNum(1, 2);
// Void Type
function log(message) {
    return console.log(message);
}
const user4 = {
    id: 3,
    name: "john"
};
const info = {
    id: 22,
    age: 222
    // Even if we didnt provide the dob, we wouldnt get an error
};
const info2 = {
    id: 22,
    age: 222
};
// this case, we cant reassigned the value of an id
info2.id = 2;
const addSum2 = (x, y) => x + y;
