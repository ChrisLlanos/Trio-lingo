// Spanish and Japanese buttons
const spanishButton = document.getElementById("spanish-button");
const japaneseButton = document.getElementById("japanese-button");
const quizContainer = document.querySelector("#quiz-container");
const quizContTwo = document.getElementById("aaa");
console.log(spanishButton);
console.log(quizContainer);
//event listener to load when the user selects language button and begins to generate the quiz
window.addEventListener("load", function () {
  //fetch to api for quizdata
  function fetchAndGenerateQuiz(language) {
    fetch("/api/quiz/json")
      .then((response) => response.json())
      .then((quizData) => {
        generateQuiz(quizData, language);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
      });
  }
  fetchAndGenerateQuiz();
  //event listeners for spanish and japanese
  spanishButton.addEventListener("click", function () {
    console.log("quiz");
    fetchAndGenerateQuiz("Spanish");
  });

  japaneseButton.addEventListener("click", function () {
    fetchAndGenerateQuiz("Japanese");
  });
  //function that displays the actual quiz
  function generateQuiz(quizData, language) {
    quizContainer.innerHTML = "";
    console.log(quizData);
    const filteredQuizData = quizData.filter(
      (question) => question.language === language
    );

    filteredQuizData.forEach(function (questionData, index) {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
      questionDiv.innerHTML = `<p>${index + 1}. ${questionData.question}</p>`;

      const choicesDiv = document.createElement("div");
      choicesDiv.className = "choices";

      questionData.choices.forEach(function (choice, choiceIndex) {
        const choiceInput = document.createElement("input");
        choiceInput.type = "radio";
        choiceInput.name = `q${index}`;
        choiceInput.value = choiceIndex;
        choicesDiv.appendChild(choiceInput);

        const choiceLabel = document.createElement("label");
        choiceLabel.textContent = choice;
        choicesDiv.appendChild(choiceLabel);

        choicesDiv.appendChild(document.createElement("br"));
      });

      quizContainer.appendChild(questionDiv);
      quizContainer.appendChild(choicesDiv);
    });

    //submit button event listener

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", function () {
      evaluateAnswers(filteredQuizData);
    });
    //creates the submit button
    quizContainer.appendChild(submitButton);
    // function that tracks the selected answers the user made
    function getSelectedAnswerIndex(questionName) {
      const selectedAnswer = document.querySelector(
        `input[name="${questionName}"]:checked`
      );
      if (selectedAnswer) {
        return parseInt(selectedAnswer.value, 10);
      }
      return -1;
    }
    //function that displays the actual count of correct answers the user had
    function renderSummary(correctAnswers, totalQuestions) {
      const source = document.getElementById("summary-template").innerHTML;
      const template = Handlebars.compile(source);
      const context = { correctAnswers, totalQuestions };
      console.log(context);

      const summaryContainer = document.getElementById("summary-container");
      const summaryHTML = `<p>Your score: ${correctAnswers} out of ${totalQuestions}</p>`;
      summaryContainer.innerHTML = summaryHTML;

      submitButton.style.display = "none";
    }
    //function that evaluates if the answers the user picked were correct
    function evaluateAnswers(filteredQuizData) {
      let correctAnswers = 0;

      filteredQuizData.forEach(function (questionData, index) {
        const selectedAnswerIndex = getSelectedAnswerIndex(`q${index}`);
        const correctAnswerIndex = questionData.correctAnswer;

        if (selectedAnswerIndex === correctAnswerIndex) {
          correctAnswers++;
        }
      });

      const totalQuestions = filteredQuizData.length;
      console.log(submitButton);
      renderSummary(correctAnswers, totalQuestions);
    }
    //back home button after quiz is completed and has been submited
    const backButton = document.getElementById("back-home");
    if (backButton) {
      backButton.addEventListener("click", function () {
        window.location.href = "/";
      });
    }
  }
});
