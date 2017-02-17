from django.shortcuts import render, redirect, HttpResponse
import random
from datetime import datetime

# Create your views here.
def index(request):
    if "gold" not in request.session:
        request.session["gold"]=0
    if "result" not in request.session:
        request.session["result"]= ""

    return render(request, "ninjagold/index.html")

def process_money(request):

    if request.POST['building'] == 'farm':
        addgold = random.randrange(10,20)
        request.session["gold"] += addgold
        request.session["result"] += "Earned "+ str(addgold)+ " gold from the farm! " + "("+str(datetime.now())+")" + "\n"
    elif request.POST['building'] == 'cave':
        addcave = random.randrange(5,10)
        request.session["gold"] += addcave
        request.session["result"] += "Earned "+ str(addcave)+ " gold from the cave! " + "("+str(datetime.now())+")" + "\n"
    elif request.POST['building'] == 'house':
        addhouse = random.randrange(2,5)
        request.session["gold"] += addhouse
        request.session["result"] += "Earned "+ str(addhouse)+ " gold from the house! " + "("+str(datetime.now())+")" + "\n"
    elif request.POST['building'] == 'casino':
        if random.randrange(0,2) == 0:
            addcasino =random.randrange(0,50)
            request.session["gold"] += addcasino
            request.session["result"] += "Entered a casino and won "+ str(addcasino)+ " gold ....WINNER! " + "("+str(datetime.now())+")" + "\n"
        else:
            addcasino =random.randrange(0,50)
            request.session["gold"] -= addcasino
            request.session["result"] += "Entered a casino and lost "+ str(addcasino)+ " gold ....cry me a river! " + "("+str(datetime.now())+")" + "\n"
    return redirect('/')
