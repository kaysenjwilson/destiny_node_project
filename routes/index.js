const myController = require("../controllers");
const routes = require("express").Router();

routes.use("/api-docs", require("./swagger"))

routes.get("/", myController.getToWeapons);

routes.use("/weapons", require("./weapons"));

module.exports = routes;