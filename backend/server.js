require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

// TODO: Move these to a database
const posts = [
  { username: "Sam", title: "Post 1", email: "test@1234.com" },
  { username: "Kyle", title: "Post 2", email: "lol@123.com" },
];

app.use(express.json());

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.email === req.user.email));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log(user);
    next();
  });
}

app.listen(4000);
