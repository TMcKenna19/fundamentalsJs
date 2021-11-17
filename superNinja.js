//Super ninja 
// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom()

class Ninja {
    constructor (nameInput,health){
        this.nameInput = nameInput; 
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
    
  }



class Sensei extends Ninja {
    constructor(nameInput,health){
        super(nameInput,health)
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake();
    }
   
}



ninjaOne = new Sensei("Tim",100)
//   ninjaTwo = new Ninja("Rob", 100)
  
//   ninjaTwo.sayName()
//   console.log()
//   ninjaOne.drinkSake()
//   ninjaOne.showStats()
ninjaOne.speakWisdom()