This project contains two acbend servers.
server.js is our API server which will server our app with data
from a databse.

authServer.js handles access and refresh tokens to handle
users signing in and out out. Refresh token are stored in a database
while access tokens will be stored as Http only cookies.

To start these servers:
RUN: npm run devStart
RUN: npm run devStartAuth

To configure your athentication server:
1.) Create a .env file in the main project directory
2.) In that file add:
ACCESS_TOKEN_SECRET=<your access token secret>
REFRESH_TOKEN_SECRET=<your refresh token secret>

To start the react application (App.js):
RUN: npm start
