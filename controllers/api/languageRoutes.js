const router = require("express").Router();
const { Quiz } = require("../../models/quiz");

router.get("/", async (req, res) => {
  res.render("languageSelection");
});

router.get("/api/language/quiz", async (req, res) => {
  try {
    const language = req.params.language;

    const quizData = await fetchQuizData(language);
    res.json({ quizQuestions: quizData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch quiz questions." });
  }
});

module.exports = router;
