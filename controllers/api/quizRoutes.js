const router = require("express").Router();
const { Quiz, Question } = require("../../models");

router.get("/:quizId", async (req, res) => {
  try {
    const quizId = req.params.quizId;

    const quiz = await Quiz.findByPk(quizId, {
      include: [
        {
          model: Question,
          attributes: [
            "question",
            "choices",
            "correctAnswer",
            "language",
            "createdAt",
            "updatedAt",
          ],
        },
      ],
    });

    if (!quiz) {
      res.status(404).json({ message: "Quiz not found" });
      return;
    }

    const quizQuestions = quiz.Questions || [];

    res.status(200).json({ quiz, quizQuestions });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
