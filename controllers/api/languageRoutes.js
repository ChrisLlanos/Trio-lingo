const router = require("express").Router();
const { Quiz } = require("../../models/quiz");

router.get("/", async (req, res) => {
  res.render("languageSelection");

  // try {
  //   const languages = await Quiz.findAll({
  //     attributes: ["language"],
  //     group: ["language"],
  //   });
  //   const languageOptions = languages.map((quiz) => quiz.language);
  //   res.json({ languages: languageOptions });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

module.exports = router;
