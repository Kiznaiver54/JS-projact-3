function calculate (a, b, operation) {
    return operation(a, b)
}

function add (a, b) {
    return a + b
}

function sub (a, b) {
    return a - b
}

function mult (a, b) {
    return a * b
}

function div (a, b) {
    return a / b
}


console.log(calculate(2, 3, add))
console.log(calculate(2, 3, sub))
console.log(calculate(2, 3, mult))
console.log(calculate(2, 3, div))
