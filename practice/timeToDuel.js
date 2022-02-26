class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Ninja extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        if(target instanceof Ninja){
            target.resilience -= this.power
        }else{
            throw new Error("Target must be a Ninja")
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude){
        super(name, cost)
        this.stat = stat;
        this.magnitude = magnitude
        magnitude>0?
            this.text = `Increase target's ${this.stat} by ${this.magnitude}`:
            this.text = `Reduce target"s ${this.stat} by ${this.magnitude}`

    }
    play(target){
        if(target instanceof Ninja){
            if(this.stat.toLowerCase() == "resilience"){
                target.resilience += this.magnitude
                
            }else{
                target.power += this.magnitude
            }

        }else{
            throw new Error("Target must be a Ninja")
        }
    }

}


//                                    ,cost,power,resilience
const redNinja = new Ninja("Red Ninja", 3, 3, 4);
const blackNinja = new Ninja("Black Ninja", 4, 5, 4);

//                              text, cost, stat, magnitude
const hardAlgo = new Effect("Hard Algo", 2, "resilience", 3);
const promiseRej = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 2, "power", 2);
const drinkSake = new Effect("Drink Sake", 2, "power", 2);


console.log(redNinja);
drinkSake.play(redNinja);
console.log(redNinja);


// console.log(hardAlgo);
// hardAlgo.play(redNinja);
// console.log(redNinja);
// console.log("~~~~~~~~~~~~~~~~~~");
// console.log(promiseRej);
// promiseRej.play(redNinja);
// console.log(redNinja);
// console.log("~~~~~~~~~~~~~~~~~~");
// console.log(pairProgramming);
// pairProgramming.play(redNinja);
// console.log(redNinja);
// console.log("~~~~~~~~~~~~~~~~~~~");
// console.log("Red Ninja attacks Black Ninja");
// console.log(blackNinja);
// redNinja.attack(blackNinja);
// console.log(blackNinja);



