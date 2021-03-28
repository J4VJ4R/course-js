
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

function birthday(person){
  return {
    ...person,
    age: person.age + 1
  }
}