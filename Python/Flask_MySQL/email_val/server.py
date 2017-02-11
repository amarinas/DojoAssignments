from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
from datetime import datetime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key ="cookiemonster"
mysql = MySQLConnector(app,'email_valid')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def submit():
    newquery = "INSERT INTO Users (email, create_at, updated_at) VALUES (:email, NOW(), NOW())"
    data = {
        'email': request.form['email']
    }

    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash('invalid email format')
        return redirect('/')
    else:
        mysql.query_db(newquery,data)
        query = "SELECT * FROM Users"
        emails = mysql.query_db(query)
        return render_template('success.html', all_emails=emails)


# @app.route('/delete/<email>', methods=['POST'])
# def delete(email):
#     query.filter(Users.email == ':email').delete()
#     return redirect('/')

app.run(debug=True)
