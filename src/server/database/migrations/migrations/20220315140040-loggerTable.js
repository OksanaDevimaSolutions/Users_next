module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loggs', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      route: {
        type: Sequelize.DataTypes.STRING,
      },
      method: {
        type: Sequelize.DataTypes.STRING,
      },
      body: {
        type: Sequelize.DataTypes.STRING,
      },
      time: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('loggs');
  },
};
