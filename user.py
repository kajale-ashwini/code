from .. import db, flask_bcrypt

class user(db.Model):
    """ User Model for storing user related details """
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    #admin = db.Column(db.Boolean, nullable=False, default=False)
    public_id = db.Column(db.String(100), unique=True)
    firstname = db.Column(db.String(255),nullable=False)
    lastname = db.Column(db.String(255),nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
   # registered_on = db.Column(db.DateTime, nullable=False)
    #username = db.Column(db.String(50), unique=True)
    password_hash = db.Column(db.String(100))
    dob = db.Column(db.DateTime, nullable=False)
    gender = db.Column(db.String(255),nullable=False)


    @property
    def password(self):
        raise AttributeError('password: write-only field')

    @password.setter
    def password(self, password):
        self.password_hash = flask_bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return flask_bcrypt.check_password_hash(self.password_hash, password)

    def __repr__(self):
        return "<User '{}'>".format(self.email)