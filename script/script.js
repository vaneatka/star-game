
class General {
    constructor ( x, y, speed, collision, hp ){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.collision = collision;
        this.hp = hp;
    }
}

class Shuttle extends General{
    constructor(name, rockets, fuel, damage){
        super(10, 10, 15, 0.2, 100);
        this.name = name;
        this.rockets = rockets;
        this.fuel = fuel;
        this.damage = damage;
    }
}

class Rocket {
    constructor(origin, speed, timer, proximity){
        super('Shuttle pos x','Shuttle pos y', 'Triple speed', 'DAMAAAGE' ,'hp = 10')
    this.origin = origin; // trebuie de transmis shuttle care a lansat raketa
    this.speed = speed;// se poate de scos din constructor, si de o declarat constanta
    this.timer = timer// la fel ca si raketa
    this.proximity = proximity;
    }
}

class Mine {
    constructor(timer, proximity){
        super('random x', 'random y', 'speed = 0', 'Damaaage', 'hp = 1 // hp la collision devine 0, '
                                'si mina tre sa dispara')
        this.timer = timer;
        this.proximity = proximity;
    }
}

class Station {
    constructor(){
        super()
    }
}

const player1 = new Shuttle("Ion", 10, 2000, 15);
console.log(player1);