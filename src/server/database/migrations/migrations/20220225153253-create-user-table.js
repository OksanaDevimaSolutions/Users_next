module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,

      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        // allowNull defaults to true
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
