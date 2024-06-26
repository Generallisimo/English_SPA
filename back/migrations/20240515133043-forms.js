'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('forms',{
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string',
    social: 'string',
    email: {type:'string', notNull: true, unique:true},
    phone: 'string'
  });
};

exports.down = function(db) {
  return db.dropTable('forms');
};

exports._meta = {
  "version": 1
};
