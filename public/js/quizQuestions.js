document.getElementById("spanish-btn").addEventListener("click", () => {
  handleLanguageSelection("spanish");
});

document.getElementById("japanese-btn").addEventListener("click", () => {
  handleLanguageSelection("japanese");
});

async function handleLanguageSelection(language) {
  try {
    const response = await fetch(`/api/quiz/${language}`);

    if (!response.ok) {
      throw new Error("Failed to fetch quiz questions.");
    }

    const quizData = await response.json();
    const quizQuestions = quizData.quizQuestions;

    const quizQuestionsContainer = document.querySelector(".quiz-questions");
    quizQuestionsContainer.innerHTML = "";

    quizQuestions.forEach((question, index) => {
      const html = quizQuestionTemplate({
        questionNumber: `Question ${index + 1}`,
        questionText: question.question,
        answerChoices: question.choices,
      });
      quizQuestionsContainer.insertAdjacentHTML("beforeend", html);
    });
  } catch (error) {
    console.error(error);
  }
}

const quizQuestionTemplate = Handlebars.compile(`
    <div class="quiz-question">
      <h3>{{questionNumber}}</h3>
      <p>{{questionText}}</p>
      <ul class="answer-options">
        {{#each answerChoices}}
          <li><button class="answer-option">{{this}}</button></li>
        {{/each}}
      </ul>
    </div>
  `);

async function fetchAndRenderQuizQuestions(language) {
  try {
    const response = await fetch(`/api/quiz/${language}`);
    if (!response.ok) {
      throw new Error("Failed to fetch quiz questions.");
    }
    const quizData = await response.json();
    const quizQuestions = quizData.quizQuestions;

    const quizQuestionsContainer = document.querySelector(".quiz-questions");
    quizQuestionsContainer.innerHTML = "";

    quizQuestions.forEach((question, index) => {
      const html = quizQuestionTemplate({
        questionNumber: `Question ${index + 1}`,
        questionText: question.question,
        answerChoices: question.choices,
      });
      quizQuestionsContainer.insertAdjacentHTML("beforeend", html);
    });
  } catch (error) {
    console.error(error);
  }
}
