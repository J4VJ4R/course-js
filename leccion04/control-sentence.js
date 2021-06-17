let on = true, off = false;
function interruptor(state){
  if(state == on)
    console.log("turning on bulb") 
  else
    console.log("turning off bulb")
}
interruptor(off)