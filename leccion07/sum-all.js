const result = sumaTodo(1,5,7,10)
console.log(result)
function sumaTodo(){
  let suma = 0
  for(let i = 0; i < arguments.length; i++){
    suma += arguments[i]
  }
  return suma
}