import { Db, MongoClient } from "mongodb";
import { generateLogString } from "./utils";

// Create cached connection variable
let cachedDB: Db | null = null;

// A function for connecting to MongoDB,
export default async function connectToDatabase(): Promise<Db | null> {
  // If the database connection is cached, use it instead of creating a new connection
  if (cachedDB) {
    console.info(generateLogString("Using cached client!"));
    return cachedDB;
  }
  try {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    console.info(generateLogString("No client found! Creating a new one."));
    // @ts-ignore If no connection is cached, create a new one
    const client = new MongoClient(process.env.ATLAS_URI_PROD as string, opts);
    const db: Db = client.db(process.env.DB_NAME);
    cachedDB = db;
    return cachedDB;
  } catch (error) {
    console.debug(generateLogString("Error while creating connection!"));
    console.error(error);
    return null;
  }
}
