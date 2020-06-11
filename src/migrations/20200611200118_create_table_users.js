
exports.up = function(knex, Promise) {
    return knex.schema.createTable('clientes', table => {
        table.increments('id').primary();
        table.integer('numberaccount').notNullable();
        table.float('saldo').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('clientes');
  };
  