// Interface simply defines how an object should look like.
// In other words, an interface describes how and what properties an object could have


interface User{
    id: string;
    name: string;
    age: number;
    role?: string | number
}


const userInfo : User = {
    id:"1",
    name: "benrobo",
    age: 20
}

// Interface in a function

interface MathFunc {
    (x: number, y:number) : number
}


const addNum : MathFunc = (x: number, y: number) => {
    const result = x+y;
    return result
}


const res = addNum(2,4)

console.log(res)

