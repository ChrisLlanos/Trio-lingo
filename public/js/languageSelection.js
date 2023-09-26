function handleLanguageSelection(language) {
  fetch(`/api/language/${language}`)
    .then((response) => response.json())
    .then((data) => {
      renderQuizQuestions(data);
    })
    .catch((error) => {
      console.error("Error fetching quiz data:", error);
    });
}

document.getElementById("spanish-btn").addEventListener("click", () => {
  handleLanguageSelection("spanish");
});

document.getElementById("japanese-btn").addEventListener("click", () => {
  handleLanguageSelection("japanese");
});

function renderQuizQuestions() {}
