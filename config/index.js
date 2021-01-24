const pkg = require('../package.json');

module.exports = {
  name: pkg.name,
  database: {
    connection: {
      user: 'dev',
      server: 'jdbc:mysql://localhost',
      database: 'test_events',
      password: 'dev143#B',
      port: 3306,
      options: {
        encrypt: true,
        enableArithAbort: true,
      },
      pool: { min: 0, max: 20, idleTimeoutMillis: 30000 },
    },
  },
};
