require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cors());

app.use(cookieParser());

// TODO: Move these to the database
let refreshTokens = [];
// test password = poipoipoi
let users = [
  {
    username: "poi",
    password: "password",
    email: "poi@poi.poi",
  },
];

// CREATE A NEW ACCOUNT
app.post("/users", async (req, res) => {
  console.log("Create account received!");
  try {
    // TODO: Replace this with a db lookup
    // check if it already exists
    if (users.some((user) => user.email === req.body.email)) {
      return res.status(400).send("A user with the given email already exists");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = {
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    };
    // TODO: Save this to a db
    users.push(user);
    console.log({ users });
    res
      .status(201)
      .send(
        `User account created!\nUsername: ${user.username}\nEmail:${user.email}`
      );
  } catch {
    res.sendStatus(500);
  }
});

// LOGIN TO ACCOUNT
app.post("/login", async (req, res) => {
  // TODO: lookup user from database
  console.log(req.body);
  console.log(process.env.REFRESH_TOKEN_SECRET);

  const user = users.find((user) => user.email === req.body.email);
  if (user == null)
    return res.json({ message: "A user with the given email does not exist." });
  console.log("User found!");

  // The given email matches one on record
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      // successfully logged in

      const accessToken = generateAccessToken(user);
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
      // TODO: Save these to a database
      refreshTokens.push(refreshToken);
      res.cookie("accessToken", accessToken, { httpOnly: true });
      res.cookie("refreshToken", refreshToken, { httpOnly: true });
      // TODO: Redirect to main page:
      // res.redirect("/home");
      res.json({
        message: "Sign in successful",
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } else {
      res.json({ message: "Passwords did not match" });
    }
  } catch {
    res.sendStatus(500);
  }
});

// LOGOUT OF ACCOUNT
app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  console.log(refreshTokens);
  res.sendStatus(204);
});

// REFRESH ACCESS TOKEN
app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  // TODO: Replace this with a db lookup
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ email: user.email });
    res.json({ accessToken: accessToken });
  });
});

function generateAccessToken(user) {
  // TODO: change expiration time to 10-30 minutes
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "20s" });
}

app.listen(4001);
