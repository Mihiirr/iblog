const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const blog = require("./routes/blog");
const user = require("./routes/user");
const express = require("express");
const app = express();

// Connecting MongoDB to our app---------------------------------
const uri ="mongodb+srv://mihiirrrrrr:Patelmihir@5398@cluster0.njviw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

// Using middleware's----------

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/", blog);
app.use("/", user);

// created port to host our app----------------------------------

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
