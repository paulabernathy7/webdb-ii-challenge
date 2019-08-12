exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.boolean("Title");
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("Title");
  });
};
