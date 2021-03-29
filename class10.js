let start = new Date();

for(var i = 0; i < 15000; i++){
  console.log("..test")
}
let end = new Date();
let fulltime = end.getTime() - start.getTime();
console.log(fulltime/1000 + "seconds")