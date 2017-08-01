

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {

    burger_name: {type:DataTypes.STRING, allowNull: false, len: [1]},
    devoured: {type:DataTypes.BOOLEAN, allowNull:false, defaultValue: false},
    createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')}
	
	
 
	})
	
 

  return Burger;
 
};
