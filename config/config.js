var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chart'
    },
    port: 3000,
    db: 'mongodb://localhost/chart-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'chart'
    },
    port: 3000,
    db: 'mongodb://localhost/chart-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'chart'
    },
    port: 3000,
    db: 'mongodb://localhost/chart-production'
  }
};

module.exports = config[env];
