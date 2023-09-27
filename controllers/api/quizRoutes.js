const router = require("express").Router();
const { Quiz, User, Progress } = require("../../models");

router.get("/json", async (req, res) => {
  Quiz.findAll().then((quizData) => {
    res.json(quizData);
  });
});

router.get("/", async (req, res) => {
  res.render("language");
});

router.get("/quiz", async (req, res) => {
  const spanishQuiz = await Quiz.findAll({ where: { language: "Spanish" } });
  const japaneseQuiz = await Quiz.findAll({ where: { language: "Japanese" } });
  res.render("quiz", {
    selectedLanguage: req.query.language,
    spanishQuiz: spanishQuiz,
    japaneseQuiz: japaneseQuiz,
  });
});

module.exports = router;
