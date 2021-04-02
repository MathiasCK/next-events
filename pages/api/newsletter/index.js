//import fs from "fs";
//import path from "path";
//
//export const buildFilePath = () => {
//  return path.join(process.cwd(), "data", "newsletter.json");
//};
//
//export const buildFilePathData = (filePath) => {
//  const fileData = fs.readFileSync(filePath);
//  const data = JSON.parse(fileData);
//  return data;
//};
//
const handler = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email" });
      return;
    }

    console.log(email);

    /*

    const newRegistration = {
      id: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 10),
      email: email,
    };

    const filePath = buildFilePath();
    const data = buildFilePathData(filePath);
    data.push(newRegistration);
    fs.writeFileSync(filePath, JSON.stringify(data));*/

    res.status(201).json({ message: "Success!" });
  } /*else {
    console.log("error");
  }*/
};

export default handler;
