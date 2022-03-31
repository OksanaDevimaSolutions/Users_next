module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productImages', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      product_id: {
        field: 'product_id',
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'products',
          },
          key: 'id',
        },
        // allowNull: false
      },
      image: {
        type: Sequelize.DataTypes.STRING,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('productImages');
  },
};
