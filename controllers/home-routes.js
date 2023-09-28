const router = require("express").Router();
const { User } = require("../models/user");
const { Progress } = require("../models/progress");
const { Quiz } = require("../models/quiz");
const quizData = require("../seeds/quizData");
const progressData = require("../seeds/progressData");

router.get("/", async (req, res) => {
  try {
    res.render("home", {
    style: "style.css",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/login", async (req,res)=>{
  try{
    res.render("languageSelection", {
    style: "style.css",
  });
  }catch (error){
    console.error(error);
    res.status(500).send("error logging in");
  }
});

module.exports = router;
