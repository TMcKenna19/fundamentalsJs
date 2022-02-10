// Create a ninja class ***
// add an attribute: name ***
// add an attribute: health ***
// add a attribute: speed - give a default value of 3 ***
// add a attribute: strength - give a default value of 3 ***
// add a method: sayName() - This should log that Ninja's name to the console ***
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health. ***
// add a method: drinkSake() - This should add +10 Health to the Ninja ***

class Ninja {
  constructor (name,health){
      this.name = name; 
      this.health = health;
      this.speed = 3;
      this.strenght = 3;
      
  }
  sayName(){
      console.log(`${this.name}`)
      
  }
  showStats(){
      let info = `My stats: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strenght}`
      console.log(info)
  }

  drinkSake(){
      console.log("SUPER SAKE!!!!!, health power up 10 points")
      this.health += 10
  }

  eatRamen(){
      console.log("Slurp slurp, FUELED BY RAMEN, speed up 3 points ")
      this.speed += 5
  }

  dojoTraining(){
      console.log("The student has become the master")
      this.strenght +=5
  }
  
}
ninjaOne = new Ninja("Tim",100)
// ninjaTwo = new Ninja("Rob", 100)
ninjaOne.sayName()
// ninjaTwo.sayName()
console.log()
// ninjaOne.drinkSake()
ninjaOne.eatRamen()
ninjaOne.dojoTraining()
ninjaOne.showStats()
