import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../utils/db-utils";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({
      message: "Connection to the database failed",
    });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    // Add serverside validation

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      client.close();
      return;
    }

    const newComment = {
      event: eventId,
      userEmail: email,
      userName: name,
      userText: text,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Success", comment: newComment.id });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Error fetching comments" });
    }
    res.status(200).json({ comments: documents });
  }

  client.close();
};

export default handler;
