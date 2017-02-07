# coin toss
import random

def random_coin():
    randomv = int(round(random.random()+1))
    return randomv

def coin_tosses():
    heads = 0
    tails = 0
    for i in range (1, 5001):
        if(random_coin() == 1):
            heads += 1
            print "Attempt #"+str(i)+ ": Throwing a coin... its a head ...Got", str(heads), "head(s) so far and", str(tails), "tail(s) so far"
        if (random_coin() == 2):
            tails += 1
            print "Attempt #"+str(i)+ ": Throwing a coin... its a tails ...Got", str(heads), "head(s) so far and", str(tails), "tail(s) so far"


coin_tosses()
