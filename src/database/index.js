const Store = require('openrecord/stores/mysql');

const store = new Store({
  host: 'localhost',
  user: 'jpTamagotchi',
  password: '5up3r53CR3t',
  database: 'jpTamagotchi'
});

module.exports = store;
