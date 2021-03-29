let date = new Date(2016, 9, 20);

Date.prototype.sumarDias = function(days){
  this.setDate(this.getDate() + days);
 
  return this;
}
Date.prototype.sumarAnios = function(anios){
  this.setFullYear(this.getFullYear() + anios);
  return this;
}
console.log(date);
console.log(date.sumarDias(-20));
console.log(date.sumarAnios(1))