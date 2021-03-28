function player(name){
  this.name = name;
  this.pv = 100;
  this.sp = 100;
  this.heal = function(jugadorObjetivo){
    if(this.sp > 40){

      this.sp -= 40;
      jugadorObjetivo.pv += 20
    }else{
      console.info(this.name + " don't have sp")
    }
  }
  this.shootArrow = function(jugadorObjetivo){
    if(jugadorObjetivo.pv > 40){

      jugadorObjetivo.pv -= 40;
    }else{
      jugadorObjetivo.pv = 0;
      console.error(jugadorObjetivo.name + " is dead!!");
    }
    this.estate(jugadorObjetivo);
  }
  this.shootGun = function(jugadorObjetivo){
    if(jugadorObjetivo.pv > 15){

      jugadorObjetivo.pv -= 15;
    }else{
      jugadorObjetivo.pv = 0;
      console.error(jugadorObjetivo.name + " is dead!!");
    }
    this.estate(jugadorObjetivo);
  }
  this.estate = function(jugadorObjetivo){
    console.info(this);
    console.log(jugadorObjetivo);
  }
};
let gandalg = new player("Gandalg");
let legolas = new player("Legolas");
console.log(gandalg);
console.log(legolas);