import express from "express";
import path from "path";
var PORT = process.env.PORT || 4000;
var app = express();

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "dist", "public")));
app.get("/", function (req, res) {
  res.sendFile(path.join(process.cwd(), "dist", "views", "index.html"));
});
app.listen(PORT, function () {
  return console.log("" + PORT);
});
