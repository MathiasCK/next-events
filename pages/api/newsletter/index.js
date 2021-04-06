import { connectDatabase, insertDocument } from "../../../utils/db-utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email" });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Database connection failed!" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", {
        userEmail: email,
      });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Success!" });
  }
};

export default handler;
