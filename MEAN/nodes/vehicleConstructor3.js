function VehicleConstructor(name, number_wheels, passenger,speed){
    if (!(this instanceof VehicleConstructor)){
        return new VehicleConstructor(name,number_wheels,passenger, speed);
    }
    // String used to generate vin number
    var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

    this.distanceTraveled = 0;
    this.speed = speed;
    this.name = name || "unicycle";
    this.number_wheels = number_wheels || 1;
    this.passenger = passenger || 0;

    this.vin = makeVin();

    function makeVin(){
        var vin = '';
        for (var i = 0; i < 17; i+=1 ){
            // Use Math.floor and Math.random to generate random index to access character from char string
            vin += chars[Math.floor(Math.random()*35)];
        }
        return vin;
    }

}

VehicleConstructor.prototype.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise);
    return this;
};

VehicleConstructor.prototype.move = function(){
    this.makeNoise();
    this.updateDistanceTraveled();
    return this;
};

VehicleConstructor.prototype.checkMiles = function(){
    console.log(this.distanceTraveled);
    return this;
};

VehicleConstructor.prototype.updateDistanceTraveled = function(){
    this.distanceTraveled += this.speed;
    console.log(this.distanceTraveled);
    return this;
}


var car = new VehicleConstructor('car', 4, 4, 80);
console.log(car);
var sportscar = new VehicleConstructor('sportscar', 4, 2, 120);
console.log(sportscar);