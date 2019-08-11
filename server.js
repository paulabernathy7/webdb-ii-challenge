// importing whats required
const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("api/cars", carsRouter);

module.exports = server;
// create knex file using knex init
//then move on to the folder where the data is
//you may have to create it
