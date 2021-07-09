const { Pool } = require("pg");

const client = new Pool({
  database: "TestArch",
  server: "localhost",
  user: "postgres",
  password: "lgr140795",
  port: 5432,
});

export default client;
