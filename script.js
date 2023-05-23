var question = document.getElementById("question");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var nextBtn = document.getElementById("nextBtn");
var globalId = 0;
var correctAns = 0;
var quizArray = [
  {
    id: 0,
    question: "1. What Is the Capital of India",
    option1: "Mumbai",
    option2: "Delhi",
    option3: "Chennai",
    option4: "Jaipur",
    ans: "delhi",
  },
  {
    id: 1,
    question: "2. What Is the Capital of USA",
    option1: "New York",
    option2: "Texas",
    option3: "Washington DC",
    option4: "Texas",
    ans: "washington dc",
  },
  {
    id: 2,
    question: "3. What Is the Largest City of Pakistan",
    option1: "Hyderabad",
    option2: "Karachi",
    option3: "Islamabad",
    option4: "Lahore",
    ans: "karachi",
  },
  {
    id: 3,
    question: "4. What Is the Largest Province By Land of Pakistan",
    option1: "Sindh",
    option2: "Punjab",
    option3: "KPK",
    option4: "Balochistan",
    ans: "balochistan",
  },
];

function quiz(id) {
  question.innerHTML = quizArray[id].question;
  op1.innerHTML = quizArray[id].option1;
  op2.innerHTML = quizArray[id].option2;
  op3.innerHTML = quizArray[id].option3;
  op4.innerHTML = quizArray[id].option4;
  opt1.value = quizArray[id].option1;
  opt2.value = quizArray[id].option2;
  opt3.value = quizArray[id].option3;
  opt4.value = quizArray[id].option4;
}

function nextBtnLogic() {
  var selectedOption = document.querySelector('input[name="op"]:checked');
  if (selectedOption !== null) {
    if (selectedOption.value.toLowerCase() === quizArray[globalId].ans) {
      correctAns++;
    }

    globalId++;
    selectedOption.checked = false;
    if (globalId < quizArray.length) {
      quiz(globalId);
    } else {
      // Display the result after the last question
      question.innerHTML =
        "Quiz completed! You scored " +
        correctAns +
        " out of " +
        quizArray.length +
        " questions.";
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
      op1.style.display = "none";
      op2.style.display = "none";
      op3.style.display = "none";
      op4.style.display = "none";
      nextBtn.style.display = "none";
    }
  }
}

nextBtn.addEventListener("click", nextBtnLogic);
quiz(globalId);
