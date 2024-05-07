module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define(
    "inventory",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true, paranoid: true }
  );

  return Inventory;
};
