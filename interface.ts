// Inteface defaines the shape of an object
// Note: interface cant contain implementation , they can only contain signature


interface Box{
    x: number,
    y: number
}

function drawBox(boxProp: Box){
    return boxProp.x
}

drawBox({
    x: 1,
    y: 2,
})



