import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://MathiasCK:Xtrmck123@cluster0.gztjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url);
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = await client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (client, collection, sort) => {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};
