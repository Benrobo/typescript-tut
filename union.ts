
// Union and Type aliases

type resultType = "as-text" | "as-number";

type Combinable = number  | string | boolean

function combine(num1: Combinable, num2: Combinable, resultType: resultType) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else{
        result = num1.toString()  + num2.toString()
    }
    return result
}

const result = combine("2",3, "as-number")

console.log(result)