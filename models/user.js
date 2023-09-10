const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize/sequelize");
const Company = require("./company");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: false,
    tableName: "Users",
  }
);


// User.hasMany(Company, { 
//     foreignKey: "userId", // Company modelindeki userId,
//     sourceKey:"id", // bu modeldeki id ile ilişkilendirilir.
//     as: "companies", // companies olarak döndürülür. buradaki "as" ile include'daki "as" aynı olmalı
//   });

(async () => {
  await User.sync({});
})();

module.exports = User;

