// importing whats required
const express = require("express");
const helmet = require("helmet");

const carsRouter = require("./cars/cars-router.js");
const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send("<h3>DB Helpers with knex</h3>");
});

module.exports = server;
// create knex file using knex init
//then move on to the folder where the data is
//you may have to create it
