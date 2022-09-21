This project contains two acbend servers.
server.js is our API server which will server our app with data
from a databse.

authServer.js handles access and refresh tokens to handle
users signing in and out out. Refresh token are stored in a database
while access tokens will be stored as Http only cookies.

To start these servers:
RUN: npm run devStart
RUN: npm run devStartAuth

To start the react application (App.js):
RUN: npm start
