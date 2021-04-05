import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://MathiasCK:Xtrmck123@nextjsevents.gztjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email" });
      return;
    }

    const client = await MongoClient.connect(url);
    const db = client.db();

    await db.collection("emails").insertOne({
      userEmail: email,
    });

    client.close();

    res.status(201).json({ message: "Success!" });
  }
};

export default handler;
