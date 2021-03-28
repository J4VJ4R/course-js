
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
function printNameUppercase({name}){
  console.log(name.toUpperCase());
} 
printNameUppercase(javier);
printNameUppercase(alex);
printNameUppercase({name: 'Diego'});