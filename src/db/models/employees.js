'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employees.hasMany(models.Attendee, {foreignKey: 'cardId', onDelete: 'CASCADE'})
      Employees.hasMany(models.Card, {foreignKey: 'cardId', onDelete: 'CASCADE' })
      // define association here
    }
  };
  Employees.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    department: DataTypes.STRING,
    position: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    cardId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};