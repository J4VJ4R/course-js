const autos = ['mazda', 'olimpus', 'kia']
autos.push('audi')
autos[autos.length] = 'cadillac'
for(let i = 0; i < autos.length; i++){

  console.log(autos[i])
}
console.log(Array.isArray(autos))
console.log(autos instanceof Array)