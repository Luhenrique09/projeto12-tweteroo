import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const tweets = [];
const user = [];

app.get("/tweets", (req, res) => {
  res.send(tweets.slice(0, 10));
});

app.post("/sign-up", (req, res) => {
  const userLogin = {
    username: req.body.username,
    avatar: req.body.avatar,
  };

  user.push(userLogin);

  res.send("Ok");
});

app.post("/tweets", (req, res) => {
  const url = user.find((obj) => obj.username === req.body.username);
  const newTweet = {
    username: req.body.username,
    avatar: url.avatar,
    tweet: req.body.tweet,
  };

  tweets.unshift(newTweet);

  res.send("OK");
});

app.listen(5000, () => {
  console.log("Server running in oprt: 5000");
});
