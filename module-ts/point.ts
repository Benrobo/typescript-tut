
export class Point2{
    x : number;
    y : number;

    constructor(_x?: number, _y?:number){
        this.x = _x;
        this.y =_y
        // ..
    }

    draw(){
        console.log(`x: ${this.x}, y: ${this.y}`)
    }
}
