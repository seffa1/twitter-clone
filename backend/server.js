require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

// CONNECTION TO THE DB
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_CONNECTION_STRING;
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// TODO: Move these to a database
const posts = [
  { username: "Sam", title: "Post 1", email: "test@1234.com" },
  { username: "Kyle", title: "Post 2", email: "lol@123.com" },
];

// DEFAULT MIDDLEWARE
app.use(express.json());

// CUSTOM MIDDLEWARE
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

// ROUTES
// non-db version
app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.email === req.user.email));
});

// db-version

// SERVER STARTS
app.listen(4000);
