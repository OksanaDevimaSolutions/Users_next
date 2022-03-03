import sequelize from '../database/connection'
import {DataTypes} from 'sequelize'
//import User from './User.models'



    const Product = sequelize.define('Product', {
        // Model attributes are defined here
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING        
        },
        price: {
          type: DataTypes.FLOAT        
        // },
        // user_id: {
        //   type: DataTypes.INTEGER,
        //   references: {
        //     // This is a reference to another model
        //     model: User,      
        //     // This is the column name of the referenced model
        //     key: 'id'
        //   }
        }
      }, {
        // Other model options go here
        tableName: 'products',
        timestamps: false
      });
      
      // `sequelize.define` also returns the model
      //console.log(User === sequelize.models.User); // true
      
      //User.sync()
        //  sequelize.sync({ force: true });
       // console.log("All models were synchronized successfully.");


export default Product;

