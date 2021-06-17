let month = 66

let station = ''

switch(month){
  case 1: case 2: case 12:
    station = 'winter';
    break
  case 3: case 4: case 5:
    station = 'summer'
    break
  case 4: case 5: case 6:
    station = 'fall'
    break
  default:
    station = 'change your option'
}
console.log(station)