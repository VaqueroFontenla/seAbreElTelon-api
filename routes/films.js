const express = require("express");
const router = express.Router();
const films = require("../data/films");

router.get("/", function (req, res) {
  res.json(films);
});

router.get("/:id", function (req, res) {
  const film = films.find((film) => `${film.id}` === req.params.id);
  res.json(film);
});

module.exports = router;
