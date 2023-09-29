const router = require("express").Router();
const { Quiz } = require("../../models/quiz");

//route to render quiz.handlebars
router.get("/", async (req, res) => {
  res.render("quiz");
});

module.exports = router;
