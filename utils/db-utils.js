import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://MathiasCK:Xtrmck123@nextjsevents.gztjm.mongodb.net/events?retryWrites=true&w=majority";

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url);
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (client, collection, sort) => {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find()
    .sort(sort) // Sort comments in descending order
    .toArray();
  return documents;
};
