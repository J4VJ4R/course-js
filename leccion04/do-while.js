let battery = 0

do{
  console.log('Charging ', battery, '%')
  battery+=5
}while(battery <= 99)
if(battery > 99){
  console.log('Battery full', battery, '%')
}