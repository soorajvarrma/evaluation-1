import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import bcrypt from "bcrypt";

var users = [];
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", function (req, res) {
    res.render("index.ejs")
});
app.post("/",(req,res) =>{
    console.log(req.body)
})
app.get("/signup",  function (req, res) {
    res.render("signup.ejs")
});
app.post("/signup", (req, res)=> {
    console.log(req.body)

  });

app.get("/home",  function (req, res) {
    res.render("home.ejs")
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  