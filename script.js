function calculateScore(callback) {
  const answers = {
    q1: "Peacock",
    q2: "New Delhi",
    q3: "Tiger"
  };

  const userAnswers = {
    q1: document.getElementById("q1").value.trim(),
    q2: document.getElementById("q2").value.trim(),
    q3: document.getElementById("q3").value.trim()
  };

  return callback(userAnswers, answers);
}
function lenientScoring(userAnswers, correctAnswers) {
  let score = 0;
  for (let key in correctAnswers) {
    if (userAnswers[key].toLowerCase() === correctAnswers[key].toLowerCase()) {
      score++;
    }
  }
  return score;
}
function checkScore() {
  const score = calculateScore(lenientScoring);
  document.getElementById("score").textContent = score;
}
