'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.belongsTo(models.Attendee, {foreignKey: 'cardId', onDelete: 'CASCADE'})
      Card.belongsTo(models.Employees, {foreignKey: 'cardId', onDelete: 'CASCADE'})
      
    }
  };
  Card.init({
    cardId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};