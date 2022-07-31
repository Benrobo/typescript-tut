

// By default, javascript object has a default type of object.
// The object type is gotten from the creation of this object


// This object type is gotten from creation.

// {
//     name: string;
//     age: number
// }

// const info1 = {
//     name: "ben",
//     age: 20
// }

// interface InfoType  {
//     name: string;
//     age: number;
// } 

// const info : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     roles1: (string | number)[]; // Union type
//     roles2: [number, string]; // Tuple Array is only limited to the length specified within the type.
// } = {
//     name: "ben",
//     age: 20,
//     hobbies: ["Coding"],
//     roles1: [2, "user"],
//     roles2: [2, "user"], // if value exceeds 3, Error is thrown
// }

// info.roles2[2] = "ben" // Error

// info.roles2 = [2, "ben", "dscdsc"] // Error is thrown

// info.roles2.push(1) // No Error. This is because, tuple works on only assignments. 

// 

// console.log(info)