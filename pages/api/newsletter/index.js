import { connectDatabase, insertDocument } from "../../../utils/db-utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email" });
      return;
    }

    console.log("CONNECTING TO CLIENT");

    let client;

    try {
      client = await connectDatabase();
      console.log("CONNECTED");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    console.log("INSERTING DOCUMENT");
    try {
      await insertDocument(client, "emails", {
        userEmail: email,
      });
      await client.close();
      res.status(201).json({ message: "Success!" });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }
  } else {
    res.status(404).send("Cant get ...");
  }
};

export default handler;
