const INITIAL_ENERGY = 10
const MIN_ENERGY = 0
const LOW_ENERGY_THRESHOLD = 3

let energy = INITIAL_ENERGY//inicial level of energy of robot
while (energy>= MIN_ENERGY) {
 console.log('текущий уровень энергии: '+ energy) 
 if (energy === MIN_ENERGY){
  console.log('Robot esta triste..necesito cargarlo')
  break
 } else if(energy <=LOW_ENERGY_THRESHOLD){
  console.log("robot empieza a sentirse cansado")
 } else{
  console.log ('robot esta feliz')
 }
 energy --

}
console.log('programa ha terminado.robot esta descansando')
