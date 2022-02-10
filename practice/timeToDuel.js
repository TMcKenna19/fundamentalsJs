class RedBeltNinja {
    constructor (nameInput){
        this.nameInput = nameInput;
        this.cost = 3;
        this.power = 3;
        this.resilience = 4;
    }
    showStats(){
        let info = ` My S tats \n Name: ${this.nameInput} \n Cost: ${this.cost} \n Power: ${this.power} \n Resilience ${this.resilience}`
        console.log(info)
    }
    hardAlgo(){
        console.log("Hard Algo: increase targets resilience by 3")
        this.cost -= 2
        this.resilience += 3
    }
    unhandledPromiseRejection(){
        console.log("Reduce target's resilience by 2 ")
        this.cost -= 1 
        this.resilience -= 2
    }
    pairedProgramming(){
        console.log("Paired Programming increase target's power by 2")
        this.power += 2
    }
}

class BlackBeltNinja {
    constructor(nameInput){
        this.nameInput = nameInput;
        this.cost = 4;
        this.power = 5;
        this.resilience = 4;
    }
}


ninjaTim = new RedBeltNinja("Tim")
ninjaTim.showStats();