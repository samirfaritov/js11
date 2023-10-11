// let a = 0

// for(let i = 1; i < 10; i++) {
//     console.log(i);
// }

let numbers = [61, 484, 84, 84, 9, 4, 1, 26, 8, 99, 4]
let juft = []
let toq = []

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        juft.push(numbers[i])
    } else {
        toq.push(numbers[i])
    }
}
console.log(numbers);
console.log(juft);
console.log(toq);
