

// Adding a return type to a function.
// By default, typescript infer the return type of a function based on the returned value

// for eg

function add(n1: number, n2: number){
    return n1 + n2;
}

// in the above function, the return type of that function is determine by the value returned.

// We can also explicitly set the return type of a fuction.

// return type is set to number
function add2(n1: number, n2: number) : number {
    return n1+n2;
}

// return type is now string
function add3(n1: string, n2: string) : string {
    return n1+n2;
}

let resultData;
resultData = add2;

console.log(resultData(1,2)) // this would be 3.

// But what if we reassigned the resultData variable from pointer of a function to a value whose type is now 'number'.

// resultData = 4

console.log(resultData(1,2)) // This would thrown an error in compile time, cause resultData is no longer pointing to a function but a value which has a 'number' type.

// to solve this, we need to explicitly set the type of a variable.

let resultData2 : Function

resultData2 = add2

// resultData2 = 4 // This should thrown an error now.

console.log(resultData2(4,5))
