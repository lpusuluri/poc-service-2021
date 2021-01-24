const config = require('./config');

const { database } = config;

module.exports = {
  dev: {
    client: 'mysql',
    connection: database.connection,
    debug: false,
  },
};
