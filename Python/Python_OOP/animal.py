class Animal(object):
    def __init__(self, name, health):
        print "New Animal"
        self.name = name
        self.health = health + 100

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print "My Animal Name is "+ str(self.name)
        print "My Current health " +str(self.health)

class Dog(Animal):
     def __init__(self, name):
        self.name= name
        self.health= 150
        super(Dog, self).__init__(self.name, self.health)


     def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
     def __init__(self, name):
        self.name= name
        self.health= 170
        super(Dragon, self).__init__(self.name, self.health)
     def fly(self):
         self.health -= 10
         return self


animal1= Animal("boo", 200)
animal1.walk().walk().walk().run().run().displayHealth()

speedy = Dog("rover")
speedy.walk().walk().walk().run().run().pet().displayHealth()

drag =Dragon("beasty")
drag.walk().walk().walk().run().run().fly().fly().displayHealth()

animal2=Animal("green",10)
animal2.pet()
