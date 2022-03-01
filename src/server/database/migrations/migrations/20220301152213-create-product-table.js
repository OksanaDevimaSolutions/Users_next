'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.DataTypes.STRING,

      },
      price: {
        type: Sequelize.DataTypes.FLOAT
        // allowNull defaults to true
      },
      userId: {
        field: 'user_id',
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        },
       // allowNull: false
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
