const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

const index = require("./routes/index");
app.use("/", index);

const port = 5000;
app.listen(port, function() {
	console.log(`simple server running on ${port}`);
});
