const app = require("./app");
const films = require("./data/films");

const port = process.env.PORT || 8080;
const { API_VERSION, IP_SERVER } = require("./config");

app.get("/films", (req, res) => {
  res.json(films);
});

app.listen(port, () => {
  console.log("######################");
  console.log("###### API REST ######");
  console.log("######################");
  console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
});
