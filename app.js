const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello All"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

app.use("/api/users", users);
app.use("/api/tweets", tweets);

// app.use(passport.initialize());
// require("./config/passport")(passport);


// const passport = require("passport");
// const User = require('./models/User')

  
// app.get("/", (req, res) => {
//     const user = new User({
//         handle: "bob",
//         email: "bob@burgers.com",
//         password: "iloveburgers"
//     })
//     user.save()
// })

    


