class Bike(object):
    def __init__(self, price, maxspeed):
        self.price = price
        self.maxspeed = maxspeed
        self.miles = 0

    def displayInfo(self):
        print "my bikes price is $" + str(self.price)
        print "my max speed is " + str(self.maxspeed) + "mph"
        print "my milage is " + str(self.miles) + "miles"

    def ride(self):
        print "DRIVING NOW!!!"
        self.miles += 10

    def reverse(self):
        print "Going Backwards!!!"
        if self.miles >= 5:
           self.miles -= 5




bike1 = Bike(300, 23)
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

bike2= Bike(900, 55)
bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()
