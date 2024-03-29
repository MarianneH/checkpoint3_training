const fs = require("fs");
const connection = require("./database");

const migrate = async () => {
  const sql = fs.readFileSync("./schema.sql", "utf-8");
  await connection.promise().query(sql);
  connection.end();
};

try {
  migrate();
  console.log("successfully migrated");
} catch (err) {
  console.error(err);
}
