// Update with your config settings.
// created using knex init, and store config object

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3"
    },
    useNullAsDefault: true,

    migtations: {
      directory: "./data/migrations"
    }
  }
};
