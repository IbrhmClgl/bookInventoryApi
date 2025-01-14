import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('bookstore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

export default sequelize;
