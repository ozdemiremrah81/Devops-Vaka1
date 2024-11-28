import { MongoClient } from "mongodb";

const connectionString ="mongodb://localhost:27017";
const client = new MongoClient(connectionString);

let conn;
try {
  console.log("Connecting to MongoDB Atlas...");
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
