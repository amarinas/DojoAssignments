class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.displayAll()

    def displayAll(self):
        print "Price:$" + str(self.price)
        print "Speed: "+ str(self.speed)+ "mph"
        print "Fuel: "+ str(self.fuel)
        print "Mileage: "+ str(self.mileage)+ "mpg"
        if self.price > 10000:
            print "Tax: 0.15"
        else:
            print "Tax: 0.12"

car1= Car(11000, 44, "full" , 33)
car2= Car(900, 44, "empty" , 22)
