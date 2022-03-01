import sequelize from '../database/connection'
import {DataTypes} from 'sequelize'
//const {DataTypes} = require('sequelize')


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
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            // This is a reference to another model
            model: User,      
            // This is the column name of the referenced model
            key: 'id',      
            // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
            deferrable: Deferrable.INITIALLY_IMMEDIATE
            // Options:
            // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
            // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
            // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
          }
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

