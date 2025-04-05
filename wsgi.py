import sys
import logging
from app import app as application

sys.path.insert(0, '/var/www/')

logging.basicConfig(stream=sys.stderr)
application.secret_key = 'mysecret'