import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://MathiasCK:Xtrmck123@nextjsevents.gztjm.mongodb.net/events?retryWrites=true&w=majority";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(url);

  if (req.method === "POST") {
    // Add serverside validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      eventId,
      email,
      name,
      text,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne({
      event: eventId,
      userEmail: email,
      userName: name,
      userText: text,
    });

    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: "Success", comment: newComment.id });
  }
  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Test 1",
        text: "Comment 1",
      },
      {
        id: "c2",
        name: "Test 2",
        text: "Comment 2",
      },
    ];

    res.status(200).json({ comments: dummyList });
  }
  client.close();
};

export default handler;
