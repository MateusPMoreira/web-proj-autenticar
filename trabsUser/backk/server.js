const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/db_usuario",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
mongoose.set("useCreateIndex", true);
require("./src/models/User");
// require("./src/")

app.use("/api", require("./src/routes"));

app.listen(3001);