const router = require("express").Router();
const { Quiz, User, Progress } = require("../../models");

// get route that returns the data as a json file
router.get("/json", async (req, res) => {
  Quiz.findAll().then((quizData) => {
    res.json(quizData);
  });
});

router.get("/", async (req, res) => {
  res.render("language");
});
//route to get quiz data depending on the language
router.get("/quiz", async (req, res) => {
  const spanishQuiz = await Quiz.findAll({ where: { language: "Spanish" } });
  const japaneseQuiz = await Quiz.findAll({ where: { language: "Japanese" } });
  res.render("quiz", {
    selectedLanguage: req.query.language,
    spanishQuiz: spanishQuiz,
    japaneseQuiz: japaneseQuiz,
  });
});
//route to display summary.handlebars
router.get("/summary", async (req, res) => {
  res.render("summary");
});
module.exports = router;
