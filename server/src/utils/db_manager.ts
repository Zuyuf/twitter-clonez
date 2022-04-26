import { Model } from 'objection';
import Knex from 'knex';
import knexfile from '../db/knexfile';

const environment = process.env.NODE_ENV || 'development';

function connect() {
  const db = Knex(knexfile[environment]);
  Model.knex(db);
}

 
 // eslint-disable-next-line @typescript-eslint/ban-types
 export const db_manager: { connect: Function } = {
   connect,
 };