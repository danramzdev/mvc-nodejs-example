const express = require("express");
const path = require("path");
const port = 3000;

// Init Express
const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Template Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Controllers
const IndexController = require("./controllers/IndexController");
const UserController = require("./controllers/api/UserController");

// Routes
app.use("/", require("./routes/index")(IndexController));
app.use("/api/user", require("./routes/api/user")(UserController));

// Init Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
