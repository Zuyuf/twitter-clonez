/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('users', (tbl) => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('email').notNullable().unique();
      tbl.string('provider').notNullable();
      tbl.string('hashedPassword').notNullable();
      tbl.string('salt').notNullable();
      tbl.boolean('verifiedBadge');
      tbl.string('role').notNullable();
      tbl.timestamps(true, true);
    })
    .createTable('connections', (tbl) => {
      tbl.increments();
      tbl.integer('userId').references('id').inTable('users');
      tbl.integer('followsUserId').references('id').inTable('users');
      tbl.timestamps(true, true);
    })
    .createTable('tweets', (tbl) => {
      tbl.increments();
      tbl.integer('userId').references('id').inTable('users');
      tbl.string('body').notNullable();
      tbl.timestamps(true, true);
    })
    .createTable('tweetComments', (tbl) => {
      tbl.increments();
      tbl.integer('userId').references('id').inTable('users');
      tbl.integer('tweetId').references('id').inTable('tweets');
      tbl.string('commentBody').notNullable();
      tbl.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('connections')
    .dropTableIfExists('tweetComments')
    .dropTableIfExists('tweets')
    .dropTableIfExists('users');
};
