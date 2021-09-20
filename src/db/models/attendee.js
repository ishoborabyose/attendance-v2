'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Attendee.belongsTo(models.Employees, {foreignKey: 'cardId', onDelete: 'CASCADE'})
      // Attendee.hasMany(models.Card, {foreignKey: 'cardId', onDelete: 'CASCADE' })
      // define association here
    }
  };
  Attendee.init({
    cardId: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Attendee',
  });
  return Attendee;
};