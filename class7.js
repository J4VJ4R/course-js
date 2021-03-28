
let javier = {
  name: "Javier",
  lastname: "Jaramillo",
  age: 38
}
let alex = {
  name: "Alex",
  lastname: "Andrade",
  age: 20
}
function printNameUppercase(person){
  let { name } = person; 
  console.log(name.toUpperCase());
} 
printNameUppercase(javier);
printNameUppercase(alex);

function printNameAge(person){
  let { name } = person;
  let { age } = person;
  console.log(`Hi, my name is ${name} and my age is ${age}`)
}
printNameAge(alex)