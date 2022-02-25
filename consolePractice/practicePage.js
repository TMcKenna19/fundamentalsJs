// const alphabet = ["A,B,C,D,E,F"]
// const numbers = ["1,2,3,4,5,6"];

// // const [a,b] = alphabet;
// // const newArray = [...alphabet, ...numbers]
// const newArray = alphabet.concat(numbers)
// console.log(newArray)

function sumAndMultiply(a,b){
    return [a+b, a*b]
}
const array = sumAndMultiply(2,3)
console.log(array)
