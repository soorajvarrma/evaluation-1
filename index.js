import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", function (req, res) {
    res.render("index.ejs")
});

app.get("/signup",  function (req, res) {
    res.render("signup.ejs")
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  