#!/usr/bin/env python

from flask import Flask, send_from_directory, send_file
from dotenv import load_dotenv, find_dotenv
from os import environ
from sys import exit

load_dotenv(find_dotenv())

HOST = str(environ['HOST'])
PORT = int(environ['PORT'])

app = Flask(__name__)

def main():
  @app.route('/')
  def html():
    return send_file('./app/index.html')

  @app.route('/<path:path>')
  def index(path):
    return send_from_directory('./app', path)

  app.run(
    port=PORT,
    host=HOST,
    debug=False
  )

if __name__ == '__main__':
  try: main()
  except: exit(1)