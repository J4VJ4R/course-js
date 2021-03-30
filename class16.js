let car = {
  color: "white",
  brand: "mazda",
  print: function(){
    let show = this.brand + " - " + this.color;
    return show;
  }
}
let car2 = {
  color: "red",
  brand: "Ferrrari"
}
console.log(car.print());

let logCar = function(arg1, arg2){
  console.log("car: ", this.print());
  console.log("Arguments:", arg1, arg2);
  console.log("==============")
}
let logCarModel = logCar.bind(car);
logCarModel("abc", "xyz");
logCarModel.call(car, "123", "abc")
logCarModel.apply(car, ["asd", "qwe"])

console.log(car.print.call(car2 ))