import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

const connect = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username:process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE
}
const sequelize = new Sequelize({
    ...connect,
  dialect: 'postgres'
  // logging: envUtil.isProdEnv() ? console.log : false,
});

export default sequelize