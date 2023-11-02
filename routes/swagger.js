const routes = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

routes.use("/api-docs", swaggerUi.serve);
routes.use("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = routes;