import { MongoClient } from "mongodb";

let client: MongoClient | null = null;
let promise: Promise<MongoClient> | null = null;

export async function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (client) return client;
  if (!promise) {
    promise = MongoClient.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
  }

  client = await promise;
  return client;
}


