module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
      },
      token: {
        type: Sequelize.DataTypes.STRING,
      },
      name: {
        type: Sequelize.DataTypes.STRING,

      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        // allowNull defaults to true
      },
    });
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING,

      },
      price: {
        type: Sequelize.DataTypes.FLOAT,
        // allowNull defaults to true
      },
      user_id: {
        field: 'user_id',
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        // allowNull: false
      },
    });
    await queryInterface.createTable('logs', {
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
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('products');
    await queryInterface.dropTable('logs');
  },
};
