const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const ENVS = require("dotenv").config().parsed;

app.use("/dist", express.static("dist"));

const renderHTML = () => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script src="${ENVS.SOURCE_DOMAIN}/dist/bundle.js"></script>
</body>
</html>
    `;
};

app.get("/", (req, res) => {
  const html = renderHTML();
  res.send(html);
});

app.listen(PORT, () => {
  console.log("Server start at port", PORT);
});
