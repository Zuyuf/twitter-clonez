import HASH from '@utils/hash.util';

function password(pass) {
  const _password = HASH.encrypt(pass);

  return {
    hashedPassword: _password.password.hash,
    salt: _password.password.salt,
  };
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  //truncate all existing tables
  await knex.raw('TRUNCATE TABLE "users" CASCADE');
  await knex.raw('TRUNCATE TABLE "connections" CASCADE');
  await knex.raw('TRUNCATE TABLE "tweets" CASCADE');
  await knex.raw('TRUNCATE TABLE "tweetComments" CASCADE');

  // Deletes ALL existing entries
  await knex('users').insert([
    {
      id: 1,
      name: 'Geralt',
      email: 'geralt@gmal.com',
      provider: 'email',
      ...password('1234'),
    },
  ]);
}
