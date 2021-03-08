const express = require("express");
const app = express();
const port = 3001;
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
app.use(express.json());

// mongoose
mongoose.connect('mongodb://127.0.0.1:27017/AEWS')

app.use("/", require("./routes/volunteerRoute"));

app.listen(port, () => {
  console.log("Server listening on port " + port);
});