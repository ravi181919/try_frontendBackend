import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;


// get a list of 5 jokes =>

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Banana's Predicament",
      content:
        "Why did the banana go to the doctor? Because it wasn't peeling well!",
    },
    {
      id: 2,
      title: "The Talkative Chair",
      content: "What did the chair say to the table? 'Please, pull up a seat!'",
    },
    {
      id: 3,
      title: "The Mischievous Lamp",
      content:
        "Why did the lamp get in trouble? Because it was always throwing shade!",
    },
    {
      id: 4,
      title: "The Shy Pillow",
      content: "Why was the pillow so shy? Because it always got covered!",
    },
    {
      id: 5,
      title: "The Wise Clock",
      content:
        "Why did the clock get promoted? Because it kept ticking all the right boxes!",
    },
  ];

  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Server is runing at http://localhost:${PORT}`);
});
