let PI = Math.PI;
let E = Math.E;
console.log(PI);
console.log(E);

let number1 = 10.456789;

console.log(number1);
console.log(Math.round(number1 * 100) / 100);

console.log(Math.floor(number1));

let rnd = Math.random();
console.log(rnd);

function randomEntre(min, max){
  return Math.floor(Math.random() * (max - min + 1) + 1)
}

console.log(randomEntre(1, 6));

//sqrt
console.log(Math.sqrt(25))

//pow
console.log(Math.pow(7, 2))