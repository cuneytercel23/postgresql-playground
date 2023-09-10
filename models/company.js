const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize/sequelize");
const User = require("./user");

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model:User,
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Company",
    timestamps: false,
    tableName: "Companies",
  }
);

Company.hasOne(User, {
  foreignKey: "id", // userModelindeki id,
  sourceKey: "userId", // bu modeldeki userId ile ilişkilendirilir.
  as: "user", // user olarak döndürülür. buradaki as ile include'daki "as" aynı olmalıdır.
});


(async () => {
  await Company.sync({});
})();

module.exports = Company;
