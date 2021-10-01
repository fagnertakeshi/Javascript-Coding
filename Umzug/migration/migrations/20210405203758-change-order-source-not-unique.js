'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Orders','source', {
      type: DataTypes.STRING,
      unique: false
    } );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Orders', 'source', {
      type: DataTypes.STRING,
      unique: true
    } );
  }
};
/*
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.changeColumn('Orders', 'source', {
  type: DataTypes.STRING,
  unique: false
});
}}
*/