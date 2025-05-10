// db.config.js
const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "M4y$3cureP@ssw0rd!2024",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  export default dbConfig; // <-- Exportación predeterminada
  