const handler = (req, res) => {
  const eventId = req.query.eventId;
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
      id: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 10),
      email,
      name,
      text,
    };

    console.log(newComment);

    res.status(201).json({ message: "Success", comment: newComment });
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
};

export default handler;
