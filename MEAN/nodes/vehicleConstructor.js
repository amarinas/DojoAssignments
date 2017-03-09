/**
 * Created by amarinas on 3/6/17.
 */
function VehicleConstructor(name, number_of_wheels, number_of_passengers){
    var vehicle= {};

    vehicle.name = name;
    vehicle.number_of_wheels = number_of_wheels;
    vehicle.number_of_passengers = number_of_passengers;

    //makenoise method

    vehicle.makeNoise = function(){
        console.log("making noise")
    }
    return vehicle;

}

var bike= VehicleConstructor("bike", 2, 1);
bike.makeNoise = function () {
    console.log("ring ring")
}
bike.makeNoise();


var sedan= VehicleConstructor("sedan", 4, 3);
bike.makeNoise = function () {
    console.log("honk honk")
}

var bus= VehicleConstructor("bus", 8, 5);
bus.pickUp = function (number_of_passengers) {
    bus.number_of_passengers += number_of_passengers;
}

console.log(bus);
console.log(sedan);
bus.pickUp(10);
console.log(bus.number_of_passengers);
