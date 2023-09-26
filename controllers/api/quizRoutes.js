const router = require("express").Router();
const { Quiz, Question } = require("../../models");

router.get("/", async (req, res) => {
  Quiz.findAll().then((quizData) => {
    res.json(quizData);
  });
});

module.exports = router;
