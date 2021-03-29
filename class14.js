try{

  throw 1;

}
catch(e){
  console.log(e);
}
finally{
  console.log("test of test")
}

function registerError(e){

  let time = new Date();
  console.log("was a error in line 21 at file.js ", e, "at: ", time)
}