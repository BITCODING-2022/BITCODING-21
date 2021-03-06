const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));

app.post("/upload", (req, res) => {
  const newpath = __dirname + "/files/";
  const file = req.files.file;
  const filename = file.name;

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.send({ message: "File upload failed", code: 200 });
    }
    res.send({ message: "File Uploaded", code: 200 });
  });
});

app.listen(3001, () => {
  console.log("Server running successfully on 3001");
});