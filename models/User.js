const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  password: {
    type: DataTypes.STRING,
    // ADD BCRYPT STUFF HERE OR FIGURE OUT PASSPORT
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull:false
  }
  // is_dm: {
  //   type: DataTypes.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: false,
  // },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);

module.exports = User;
