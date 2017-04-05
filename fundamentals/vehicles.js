/***************** Vehicle Constructor ******************
private vars: 
private methods: buildingVehicle - just console.logs, no logic
public properties:  _name: acquired from params; constant
                    wheels: acquired from params
                    pax: acquired from params


public methods:     makeNoise: just console.log
                    loadBus: takes number of pax to pick up and adds to pax count
on run: runs buildingVehicle
returns: ourVehicle object.
*****************  END *******************/

"use strict"

// distanceTravelled should be private
var distanceTravelled = Symbol();

class Vehicle {
    constructor(name, wheels, pax, speed){

        this[distanceTravelled] = 0

        this._name = name;
        this.wheels = wheels;
        this.pax = pax;
        this.speed = speed;
    }

    makeNoise() {
        if (this._name == 'bike') {
            console.log('ring ring!');
        } if (this._name == 'sedan' || this._name == 'bus') {
            console.log('honk honk!');
        } 
    }

    loadBus(newPax){
        this.pax += newPax;
        console.log(this.pax);
    }

    updateDistanceTravelled() {
        this[distanceTravelled] += this.speed;
    }

    get miles() {
        console.log(this[distanceTravelled])
    }

    get howFast() {
        console.log(this.speed);
    }

    move() {
        this.updateDistanceTravelled();
        this.makeNoise()
    }
}

var bike = new Vehicle('bike', 2, 1, 10);
bike.move()
bike.howFast
bike.miles
