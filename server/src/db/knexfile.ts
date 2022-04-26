// Update with your config settings.
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { knexSnakeCaseMappers  } from 'objection';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// import knex, { Config } from 'knex';
import { KnexConfig } from '@/types';


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const _knex: KnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'twitter_clone',
      user: 'postgres',
      password: 'pg@123',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers,
  },
};

export default _knex;
