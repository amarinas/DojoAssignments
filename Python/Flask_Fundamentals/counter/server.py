from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key='ThisisSecret'
# our index route will handle rendering our form
def sumSessionCounter():
  try:
    session['counter'] += 1
  except KeyError:
    session['counter'] = 1

@app.route('/')
def index():
    sumSessionCounter()
    return render_template("index.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/', methods=['POST'])
def clicked():
    if request.form['button'] == 'ninja add 2':
        session['counter'] += 2
    elif request.form['button'] == 'hackers clear me':
        session['counter'] = 0

    return render_template('index.html')
app.run(debug=True) # run our server
