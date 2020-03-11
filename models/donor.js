module.exports = function(sequelize, DataTypes) {
  var Donor = sequelize.define("Donor", {
    name: DataTypes.STRING,
    businessName: DataTypes.STRING,
    businessAddress: DataTypes.STRING,
    foodList: DataTypes.STRING
  });
  return Donor;
};
