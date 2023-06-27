// server.js
const express = require("express");
const app = express();
const PORT = 4040;

// Define your NFT card data
const cards = [
  {
    id: 1,
    title: "Card 1",
    image:
      "https://i.pinimg.com/564x/0f/d0/fa/0fd0fa63ff40ebc9f50873d14a043436.jpg",
  },
  {
    id: 2,
    title: "Card 2",
    image:
      "https://i.pinimg.com/564x/91/ae/56/91ae56492f88b79038dac3d96bc32643.jpg",
  },
];

app.get("/api/cards", (req, res) => {
  res.json(cards);
});

app.get("/api/cards/:id", (req, res) => {
  const { id } = req.params;
  const card = cards.find((c) => c.id === parseInt(id));

  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ message: "Card not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
