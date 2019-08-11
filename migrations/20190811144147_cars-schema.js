//created using knex migrate:make

exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("VIN"),
      tbl
        .text("make", 128)
        .unique()
        .notNullable();
    tbl.text("model", 128).notNullable();
    tbl.decimal("mileage").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
//
