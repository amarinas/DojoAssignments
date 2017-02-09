from flask import Flask, render_template, request, redirect, session
import random
from datetime import datetime
app = Flask(__name__)
app.secret_key='ThisisSecret'

@app.route('/')
def index():
    if "gold" not in session:
        session["gold"]=0
    if "result" not in session:
        session["result"]= ""

    return render_template("index.html")
@app.route('/process_money', methods=['POST'])
def match():
    if request.form['building'] == 'farm':
        addgold = random.randrange(10,20)
        session["gold"] += addgold
        session["result"] += "Earned "+ str(addgold)+ " gold from the farm! " + "("+str(datetime.now())+")" + "\n"
    elif request.form['building'] == 'cave':
        addcave = random.randrange(5,10)
        session["gold"] += addcave
        session["result"] += "Earned "+ str(addcave)+ " gold from the cave! " + "("+str(datetime.now())+")" + "\n"
    elif request.form['building'] == 'house':
        addhouse = random.randrange(2,5)
        session["gold"] += addhouse
        session["result"] += "Earned "+ str(addhouse)+ " gold from the house! " + "("+str(datetime.now())+")" + "\n"
    elif request.form['building'] == 'casino':
        if random.randrange(0,2) == 0:
            addcasino =random.randrange(0,50)
            session["gold"] += addcasino
            session["result"] += "Entered a casino and won "+ str(addcasino)+ " gold ....WINNER! " + "("+str(datetime.now())+")" + "\n"
        else:
            addcasino =random.randrange(0,50)
            session["gold"] -= addcasino
            session["result"] += "Entered a casino and lost "+ str(addcasino)+ " gold ....cry me a river! " + "("+str(datetime.now())+")" + "\n"
    return redirect('/')

app.run(debug=True) # run our server
