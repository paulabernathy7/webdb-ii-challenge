// after adding packages

const server = require("./api/server.js");

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Running on port ${port}`));
//next create server.js
