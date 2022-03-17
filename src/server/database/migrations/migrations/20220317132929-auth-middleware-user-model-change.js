module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'token');
    await queryInterface.changeColumn('users', 'email', { type: Sequelize.DataTypes.STRING, allowNull: false });
    await queryInterface.changeColumn('users', 'password', { type: Sequelize.DataTypes.STRING, allowNull: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'token', { type: Sequelize.DataTypes.STRING });
  },
};
