var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'PIZZA_PALACE'
    },
    port: 3000,
     db: 'mongodb://localhost/pizza_palace'
  },

  test: {
    root: rootPath,
    app: {
      name: 'PIZZA_PALACE'
    },
    port: 3000,
    db: 'mongodb://localhost/pizza_palace'
  },

  production: {
    root: rootPath,
    app: {
      name: 'PIZZA_PALACE'
    },
    port: 3000,
    db: 'mongodb://localhost/pizza_palace'
  }



};


module.exports = config[env];
