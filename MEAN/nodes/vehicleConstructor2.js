/**
 * Created by amarinas on 3/6/17.
 */
function VehicleConstructor(name, number_of_wheels, number_of_passengers, speed){
    if(! (this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, number_of_wheels, number_of_passengers, speed);
    }

    var distance_traveled= 0;
    var self = this;
    var update_distance = function () {
        distance_traveled += self.speed;
        console.log(distance_traveled);

    }

    this.name = name;
    this.number_of_wheels = number_of_wheels;
    this.number_of_passengers = number_of_passengers;
    this.speed= speed;

    //makenoise method

    this.makeNoise = function(){
        console.log("making noise")
    }
    this.move = function () {
        update_distance();
        this.makeNoise();

    }
    this.checkmiles = function () {
        return distance_traveled;
    }

}

var bike= new VehicleConstructor("bike", 2, 1);
this.makeNoise = function () {
    console.log("ring ring")
}
this.makeNoise();


var sedan= new VehicleConstructor("sedan", 4, 3);
this.makeNoise = function () {
    console.log("honk honk")
}

var bus= new VehicleConstructor("bus", 8, 5);
bus.pickUp = function (number_of_passengers) {
    bus.number_of_passengers += number_of_passengers;
}

console.log(bus);
console.log(sedan);
bus.pickUp(10);
console.log(bus.number_of_passengers);
console.log(bus.checkmiles());