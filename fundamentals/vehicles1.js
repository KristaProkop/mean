
function Vehicle(name, wheels, pax, speed){

    var distanceTravelled = 0
    var generate_vin = function() {
        var min = 10000000
        var max = 99999999
        var vin = Math.floor(Math.random() * (max - min)) + min;
        return vin
        }

    this._name = name;
    this.wheels = wheels;
    this.pax = pax;
    this.speed = speed;
    this.vin = generate_vin()
    self = this
    self.get_distance = function() {
        console.log(distanceTravelled);
        return self
    }
    self.set_distance = function(mph) {
        distanceTravelled += mph
        return self
    }
}

Vehicle.prototype.makeNoise = function() {
    if (this._name == 'bike') {
        console.log('ring ring!');
    } if (this._name == 'sedan' || this._name == 'bus') {
        console.log('honk honk!');
    } 
}

Vehicle.prototype.updateDistanceTravelled = function() {
        this.set_distance(this.speed)
        return this
}

Vehicle.prototype.move = function() {
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
}

Vehicle.prototype.loadBus = function(newPax) {
    this.pax += newPax;
    console.log(this.pax);
    return this;

}

// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.

bus = new Vehicle('bus', 6, 10, 55)
console.log(bus.vin)
sedan = new Vehicle('sedan', 4, 5, 70)
console.log(sedan.vin)
bike = new Vehicle('bike', 2, 1, 10)
bus.loadBus(4)
bus.move().move().get_distance()

bus.move().loadBus(4).get_distance().makeNoise()
sedan.move().get_distance()
bike.move().get_distance()

console.log(bus.pax)
bus.loadBus(2)
bus.loadBus(2)