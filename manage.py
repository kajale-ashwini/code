import os
import unittest
from app.main.model import user  #imported user.py

from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

from app.main import create_app, db

app = create_app('dev')   #calls the create app function

app.app_context().push()

manager = Manager(app)   #nstantiates the manager and migrate classes to their respectivr constructor

migrate = Migrate(app, db)

manager.add_command('db', MigrateCommand)  #to expose all the database migration commands through Flask-Script.

@manager.command
def run():
    app.run()

@manager.command
def test():
    """Runs the unit tests."""
    tests = unittest.TestLoader().discover('app/test', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1

if __name__ == '__main__':
    manager.run()