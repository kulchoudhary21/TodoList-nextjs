import { Sequelize, DataTypes } from "sequelize";
import users from "../models/users";
import task from "../models/task";
const sequelize = new Sequelize("NextTodos", "root", "Admin@123", {
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// db.products = products(sequelize, DataTypes);
db.users = users(sequelize, DataTypes);
db.task = task(sequelize, DataTypes);
db.sequelize
  .sync()
  .then(() => {
    console.log("tables created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
export default db;
