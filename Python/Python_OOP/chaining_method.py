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
        return self

    def reverse(self):
        print "Going Backwards!!!"
        if self.miles >= 5:
           self.miles -= 5
        return self





bike1 = Bike(300, 23)
bike1.ride().ride().ride().reverse().displayInfo()


bike2= Bike(900, 55)
bike2.ride().ride().ride().reverse().displayInfo()
