let objectJs = {
  name: "Javier",
  age: 38,
  print: function(){
    console.log(this.name, this.age)
  }
}

console.log("Literal object ", objectJs);

let jsonString = JSON.stringify(objectJs);
console.log(jsonString);

let objectFromJson = JSON.parse(jsonString);
console.log(objectFromJson)