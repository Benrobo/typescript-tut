

const ADMIN = 0;
const AUTHOR = 1;


const info = {
    name: "ben",
    age: 20,
    hobbies: ["Coding"],
    role: ADMIN
}

// setting info.role key that way, is much easier but aslo has a downsides. this is bcos, sometimes our program can assign a number which isn't valid. since ADMIN=0 and AUTHOR=1, we can assign invalid number to role like this. 

info.role = 3 // Ofcourse, 3 is a valid number type but isnt valid interms with the logic we want.

// This is when enum type comes into play.

enum Role {
    ADMIN,
    AUTHOR
}

const info2 = {
    name: "ben",
    age: 20,
    hobbies: ["Coding"],
    role: Role.ADMIN
}

if (info2.role === 3) {
    // This would result in an error cause 3 isnt define within the enum types.
    console.log("user has no role.")
}

if (info2.role === 1) {
    // This would run successfully since we have an enum type whose value is 1 ( AUTHOR )
    console.log("user is author")
}