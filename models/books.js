const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize/sequelize");
const User = require('./user');

class Book extends Model {}

Book.init(
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
            model: User,
            key:"id",
          }
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Book",
    timestamps: false,
    tableName: "Books",
  }
);

Book.belongsTo(User, {
    foreignKey: "userId", // bu modeldeki userId parametresi ile
    targetKey:"id", // userModeldeki id 'yi ilişkilendirir
    as: "user", // user olarak döner, "as" ile, include'daki "as" aynı olmalıdır.
  });

(async () => {
  await Book.sync({});
})();

module.exports = Book;
