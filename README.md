# Quiz_Master
## Date:11.07.2025
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>QuizMaster</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>QuizMaster</h1>

  <div class="container">
    <p>Question 1: What is the National Bird of India?</p>
    <input type="text" id="q1" placeholder="Your answer">

    <p>Question 2: What is the capital of India?</p>
    <input type="text" id="q2" placeholder="Your answer">

    <p>Question 3: What is the National Animal Of India?</p>
    <input type="text" id="q3" placeholder="Your answer">

    <button onclick="checkScore()">Check Score</button>

    <p class="score">Final Score: <span id="score">0</span></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  font-family: Arial, sans-serif;
  background-color: lightcyan;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #333;
}

.container {
  background:lightgoldenrodyellow;
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.container p {
  margin: 10px 0 5px;
  text-align: left;
}

.container input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  background-color:lightgreen;
  color: white;
  padding: 10px 16px;
  margin: 5px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color:lightcoral;
}

.score {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: lightseagreen;
}
```
## JavaScript Code:
```
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
```
## Output:
<img width="954" height="913" alt="image" src="https://github.com/user-attachments/assets/b0654272-9786-445a-bbff-92e6dfbcedef" />

## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
