'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: 
    {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: 
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 50] // Password must be between 6 and 50 characters
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};