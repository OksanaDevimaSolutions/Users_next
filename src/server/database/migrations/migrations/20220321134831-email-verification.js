module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'uniqueString', {
      type: Sequelize.DataTypes.STRING,
      unique: true,
    });
    await queryInterface.addColumn('users', 'isConfirmed', {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'uniqueString');
    await queryInterface.removeColumn('users', 'isConfirmed');
  },
};
