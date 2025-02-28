import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Bitte setze die MONGODB_URI Umgebungsvariable");
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri); // ❌ Entfernt: { useNewUrlParser: true, useUnifiedTopology: true }
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;