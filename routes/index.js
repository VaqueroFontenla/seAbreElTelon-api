const express = require("express");
const router = express.Router();
const films = require("./films");

router.use("/films", films);

router.get("/", function (req, res) {
  res.json({ mensaje: "¡Bienvenido a nuestra API!" });
});

module.exports = router;
