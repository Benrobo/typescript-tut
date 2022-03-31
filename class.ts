

// CLASSES

class Person{
    id: number
    name: string

    constructor(name: string, id: number){
        this.name = name
        this.id = id
    }
}

const newp = new Person("ben", 2)

console.log(newp);

// Interfaces

interface PersonInter{
    id: number,
    name: string
    class?: string
}

const p2 : PersonInter = new Person("ben", 2)


// Access Modifier
// keywords in object-oriented languages that set the accessibility of classes, methods, and other members.

interface P22{
    name: string
    getName(name:string): string
}


class Person2 implements P22{

    name : string

    constructor(name: string){
        this.name = name
    }

    getName(name: any){
        return `${name}`
    }

    private setName(){
        this.name = "benrobo"
    }
}

const p22 = new Person2("benaiah")

// p22.setName() // calling a private method would lead to an error 

// console.log(p22.getName("ben22"));


class Point{
    constructor(_x?: number, _y?:number){
        // ..
    }

    draw(){
        console.log(`x: ${this.x}, y: ${this.y}`)
    }

    get x(){
        return this.x
    }

    set x(val){
        this.x = val
    }
}


const d = new Point(1, 2)
// get X
d.X
// set X
d.X = 35 // x is now 36