require("dotenv").config();

const app = require("./app");
const knex = require("./db/connection");

const PORT = process.env.PORT || 5005; // Use the PORT environment variable provided by Render

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);