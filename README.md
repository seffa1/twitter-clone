## Twitter clone

This project is still in progress. You can hit "OFFLINE ACCESS FOR VIEW ONLY" to get passed authentication for now. I wanted to build a full stack application with user authentication. There are two backend servers. One as the API to the firebase database, and the other for user authentication. The auth server issues issues access token and refresh tokens. Refresh token are saved in the database and are used to create new access tokens when they expire. Access tokens have a short lifespan to increase security. Users can delete refresh tokens by signing out or resetting their password.

## Project layout and start up

This project contains two backend servers.
server.js is our API server which will serve our app with data
from a database.

authServer.js handles access and refresh tokens to handle
users signing in and out out. Refresh token are stored in a database
while access tokens will be stored as Http only cookies.

To start these servers:
RUN: npm run devStart
RUN: npm run devStartAuth

To configure your authentication server:
1.) Create a .env file in the main project directory
2.) In that file add:
ACCESS_TOKEN_SECRET=<your access token secret>
REFRESH_TOKEN_SECRET=<your refresh token secret>

To start the react application (App.js):
RUN: npm start

<img width="1503" alt="twitter_home" src="https://user-images.githubusercontent.com/94399429/191866522-0f67db99-f19e-4bce-bab1-47985a05e6d4.png">

<img width="1489" alt="twitter_main" src="https://user-images.githubusercontent.com/94399429/191866539-1f53f423-d84d-4e4c-9a4e-9bb8c73cec00.png">

<img width="1490" alt="twitterSignIn" src="https://user-images.githubusercontent.com/94399429/191866577-32e07640-3ca9-4f59-8fd5-01f69eae10f7.png">
