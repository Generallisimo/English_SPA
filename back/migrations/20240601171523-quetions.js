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
  return db.createTable('questions', {
    id: {type:'int', primaryKey: true, autoIncrement: true},
    email: {type:'string', 
      foreignKey: {
        name: 'questions_forms_fk',
        table: 'forms',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'email'
      }
    },
    correct: 'string' ,
    wrong: 'string'
  });
};

exports.down = function(db) {
  return db.dropTable('questions');
};

exports._meta = {
  "version": 1
};
