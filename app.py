from flask import Flask, render_template, request, flash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost/signup'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = 'secret string'

db = SQLAlchemy(app)




#engine:[//[user[:password]@][host]/[dbname]]
#engine -> postgresql
#user -> postgres (see `owner` field in postgre database while starting postgre database)
#password -> password (my db password is the string, `password`)
#host -> localhost (because we are running locally on out machine)
#dbname -> flasksql (this is the name I gave to the db in the previous step)