from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key='ThisisSecret'
# our index route will handle rendering our form
# def random_number():
#     guess_num = random.randrange(1, 101)
#     return guess_num

@app.route('/')
def index():
    answer = ""
    if 'guess_num' not in session:
        session["guess_num"] = random.randrange(1, 101)
    if 'number'not in session:
        answer = ""

    else:
        if int(session["number"]) > int(session["guess_num"]):
            answer = "too big"
            # print session['number']
            session.pop('number')

        elif int(session["number"]) < int(session["guess_num"]):
            answer = "your too low"
            # print session['number']
            session.pop('number')
        else:
            answer= "you cheated!! and won Play again loser!"
            session.pop('number')
            session.pop('guess_num')
            return render_template("result_page.html", answer=answer)


    return render_template("index.html", answer=answer)

@app.route('/r', methods=['POST'])
def match():
    session["number"] = request.form["number"]
    return redirect('/')

@app.route('/re', methods=['POST'])
def result():
    return redirect('/')

app.run(debug=True) # run our server
