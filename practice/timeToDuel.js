class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
}

 const u1 = new Unit("Red Ninja", 3, 3, 4);
 const u2 = new Unit("Black Ninja", 4, 5, 4);
 console.log(u2);