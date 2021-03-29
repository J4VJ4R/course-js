function makeCookie(name, value){
  value = escape(value);
  let now = new Date();
  now.setMonth(now.getMonth() + 1)
  document.cookie = name+"="+ value +";expires=" + now.toUTCString()+";";
}
function deleteCookie(name){
  let now = new Date();
  now.setMonth(now.getMonth() - 1);
  document.cookie = name+"=x;expires=" + now.toUTCString()+";";
}
function getCookie(name){
  let cookies = document.cookie;
  let cookieArr = cookies.split("; ")
  console.log(cookieArr);
  for(let i = 0; i < cookieArr.length; i++){
    let parArr = cookieArr[i].split("=");
    cookieArr[i] = parArr;
    if(parArr[0] === name){
      return unescape(parArr[1])
    }
  }
  console.log()
  return undefined;
}
console.log(getCookie("lastname"));
// makeCookie("name", "Jaramillo");
// makeCookie("lastname", "Juees deniro");
// makeCookie("email", "Jimenes@gmail.com");
// deleteCookie("name");
// let cookies = document.cookie;

// console.log(cookies);