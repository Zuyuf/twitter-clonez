import { IConnection } from '@types';
import { Model } from 'objection';

interface ConnectionModel extends IConnection {}

// eslint-disable-next-line no-redeclare
class ConnectionModel extends Model {
  static get tableName() {
    return 'connections';
  }
}

export {
  ConnectionModel
};
