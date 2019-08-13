exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("id");
    tbl.text("vin", 128).notNullable();
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.integer("mileage").notNullable();
    tbl.text("transmissionType", 128);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExsists("cars");
};
