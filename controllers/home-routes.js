const router = require('express').Router();
const { User } = require("../models/user");
const { Progress } = require("../models/progress");
const { Quiz } = require("../models/quiz");
const quizData = require("../seeds/quizData");
const progressData = require("../seeds/progressData");

router.get("/", async (req, res) => {
  try {
    res.render("home");
    // const quizzes = await Quiz.findAll();
    // const userProgress = await Progress.findAll({
    //   where: { user_id: req.session.user_id },
    // });

    // console.log(req.session.logged_in);
    // res.render("home", {
    //   loggedIn: loggedIn,
    //   quizData: quizzes,
    //   progressData: userProgress,
    // });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
