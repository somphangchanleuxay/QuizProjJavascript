

// Variable declaration for IDs in HTML
var questionContainer = document.getElementById('question-container');
var answerButtonsContainer = document.getElementById('answer-buttons');
var startButton = document.getElementById('start-button');
var nextButton = document.getElementById('next-button');
var timerContainer = document.getElementById('timer-countdown');
var resultContainer = document.getElementById('result-container');
var resultMessage = document.getElementById('result-message');
var scoreMessage = document.getElementById('score-message');
var initialsContainer = document.getElementById('initials-container');


var quizContainer = document.getElementById('quiz-container');


var currentQuestionIndex;
var timer;
var timeLeft;
var score = 0;
var quizEnded = false;
var promptShown = false;
var savedScores = [];

// Added to ensure that the start button is showing first
nextButton.style.display = 'none';
    
//variable for questions array
var quizData = [
    {
        question: "What does the acronym DOM stand for in web development?",
        answers: [
            { text: "A) Document Object Model", correct: false },
            { text: "B) Data Object Model", correct: false },
            { text: "C) Design Object Model", correct: false },
            { text: "D) Document Oriented Model", correct: true }
        ]
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        answers: [
            { text: "A) var", correct: true },
            { text: "B) variable", correct: false },
            { text: "C) v", correct: false },
            { text: "D) Document Oriented Model", correct: false }
        ]
    },
    {
        question: "What is the purpose of the addEventListener method in JavaScript?",
        answers: [
            { text: "A) To add styling to an element", correct: false },
            { text: "B) To handle events like clicks or keypresses", correct: true },
            { text: "C) To create a new HTML element", correct: false },
            { text: "D) To change the document's structure", correct: false }
        ]
    },
    {
        question: "What is the result of the following expression: 3 + 2 + '7'?",
        answers: [
            { text: "A) 12", correct: false },
            { text: "B) 327", correct: false },
            { text: "C) 57", correct: true },
            { text: "D) 5", correct: false }
        ]
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            { text: "A) A way to close a web browser tab", correct: false },
            { text: "B) A combination of variables and functions enclosed in a lexical scope", correct: true },
            { text: "C) A special kind of loop", correct: false },
            { text: "D) A method for closing an open file in JavaScript", correct: false }
        ]
    },
    {
        question: "What is the purpose of the JSON.stringify() method in JavaScript?",
        answers: [
            { text: "A) To parse a JSON string", correct: false },
            { text: "B) To convert a JavaScript object into a JSON string", correct: true },
            { text: "C) To format a JSON file", correct: false },
            { text: "D) To extract data from a JSON object", correct: false }
        ]
    },
    {
        question: "What does the let keyword do in JavaScript?",
        answers: [
            { text: "A) Declares a constant variable", correct: false },
            { text: "B) Declares a block-scoped variable", correct: true },
            { text: "C) Declares a global variable", correct: false },
            { text: "D) Declares a function", correct: false }
        ]
    },
    {
        question: "What is the purpose of the fetch function in JavaScript?",
        answers: [
            { text: "A) To fetch data from a remote server using HTTP", correct: true },
            { text: "B) To fetch a random number", correct: false },
            { text: "C) To fetch a local file", correct: false },
            { text: "D) To fetch HTML elements from a webpage", correct: false }
        ]
    },
    {
        question: "What does the 'NaN' stand for in JavaScript?",
        answers: [
            { text: "A) Not a Number", correct: true },
            { text: "B) Not a Null", correct: false },
            { text: "C) New and Null", correct: false },
            { text: "D) Null and None", correct: false }
        ]
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answers: [
            { text: "A) pop()", correct: true },
            { text: "B) push()", correct: false },
            { text: "C) remove()", correct: false },
            { text: "D) delete()", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'splice()' method in JavaScript?",
        answers: [
            { text: "A) To add elements to an array", correct: false },
            { text: "B) To remove elements from an array", correct: true },
            { text: "C) To find the index of an element", correct: false },
            { text: "D) To concatenate arrays", correct: false }
        ]
    },
    {
        question: "Which event is triggered when a user clicks on an HTML element?",
        answers: [
            { text: "A) onmouseover", correct: false },
            { text: "B) onkeydown", correct: false },
            { text: "C) onclick", correct: true },
            { text: "D) onchange", correct: false }
        ]
    },
    {
        question: "What does the 'typeof' operator in JavaScript return for the 'null' value?",
        answers: [
            { text: "A) Undefined", correct: false },
            { text: "B) Null", correct: false },
            { text: "C) Object", correct: true },
            { text: "D) String", correct: false }
        ]
    },
    {
        question: "In JavaScript, what is the purpose of the 'map()' function?",
        answers: [
            { text: "A) To create a new array with the results of calling a provided function on every element in the array", correct: true },
            { text: "B) To check if every element in an array passes a certain test", correct: false },
            { text: "C) To filter out elements that do not meet a certain condition", correct: false },
            { text: "D) To reduce an array to a single value", correct: false }
        ]
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        answers: [
            { text: "A) '==' performs type coercion, while '===' does not", correct: true },
            { text: "B) They are completely interchangeable", correct: false },
            { text: "C) '===' performs type coercion, while '==' does not", correct: false },
            { text: "D) There is no difference, they are synonymous", correct: false }
        ]
    },
    {
        question: "Which method is used to add one or more elements to the end of an array in JavaScript?",
        answers: [
            { text: "A) append()", correct: false },
            { text: "B) addToEnd()", correct: false },
            { text: "C) push()", correct: true },
            { text: "D) insert()", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'bind()' method in JavaScript?",
        answers: [
            { text: "A) To create a new array with the results of calling a provided function on every element in the array", correct: false },
            { text: "B) To create a new function that, when called, has its 'this' keyword set to the provided value", correct: true },
            { text: "C) To check if every element in an array passes a certain test", correct: false },
            { text: "D) To filter out elements that do not meet a certain condition", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'reduce()' method in JavaScript?",
        answers: [
            { text: "A) To create a new array with the results of calling a provided function on every element in the array", correct: false },
            { text: "B) To create a new function that, when called, has its 'this' keyword set to the provided value", correct: false },
            { text: "C) To reduce an array to a single value by calling a provided function for each element", correct: true },
            { text: "D) To filter out elements that do not meet a certain condition", correct: false }
        ]
    },
    {
        question: "In JavaScript, what is an immediately-invoked function expression (IIFE)?",
        answers: [
            { text: "A) A function that is called immediately upon its declaration", correct: false },
            { text: "B) A function that is passed as an argument to another function", correct: false },
            { text: "C) A function that is defined and executed at the same time", correct: true },
            { text: "D) A function that is invoked only in strict mode", correct: false }
        ]
    },
    {
        question: "What does the 'event.preventDefault()' method do in JavaScript?",
        answers: [
            { text: "A) Stops the propagation of an event to parent elements", correct: false },
            { text: "B) Prevents the default behavior associated with an event", correct: true },
            { text: "C) Adds a new event listener to an element", correct: false },
            { text: "D) Removes an event listener from an element", correct: false }
        ]
    },

];

quizData.forEach(question => {
    question.answers.forEach(answer => {
        answer.selected = false;
    });
});

function startQuiz() {
    quizEnded = false;
    promptShown = false;
    startButton.style.display = 'none';
    nextButton.classList.remove('hide');
    console.log("timerContainer:", timerContainer);
    timerContainer.parentNode.style.display = 'block';
    
    currentQuestionIndex = 0;
    timeLeft = 20;
    score = 0;
    startTimer();
    nextQuestion();
    showQuiz();

}

function startTimer() {
    timer = setInterval(function () {
        timerContainer.textContent = timeLeft + ' seconds';

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz("You Lose!");
        } else {
            timeLeft--;
        }
    }, 1000);
}

function showQuestion(questionData) {
    questionContainer.innerText = questionData.question;
    resetAnswerButtons();

    questionData.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsContainer.appendChild(button);
    });
}

function resetAnswerButtons() {
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

function selectAnswer(answer) {
    var correct = answer.correct;
    answer.selected = true; 
    if (correct) {
        addTime(5);
    } else {
        subtractTime(3);
    }

    nextQuestion();
}


function nextQuestion() {
    clearInterval(timer);
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
        startTimer();
    } else {
        endQuiz("Quiz complete!");
    }
}

function resetQuiz() {
    startButton.style.display = 'block';
    nextButton.style.display = 'none';
    timerContainer.parentNode.style.display = 'none';
    timerContainer.textContent = '';
    resetAnswerButtons();
    hideQuiz();

  

    if (quizEnded) {
  
    }

    quizEnded = false;
    promptShown = false;
}


function restartQuiz() {
    quizEnded = false;
    promptShown = false;
    
    startButton.style.display = 'none';
    nextButton.classList.remove('hide');
    timerContainer.parentNode.style.display = 'block';
    
    currentQuestionIndex = 0;
    timeLeft = 20;
    score = 0;
    startTimer();
    nextQuestion();
    showQuiz();


}

function restartQuizAfterSave() {
    resultContainer.classList.add('hide');
    restartQuiz(); 
}

function showQuizButtons() {
    
    var quizButtons = document.querySelectorAll('.btn');
    quizButtons.forEach(button => {
        button.classList.remove('hide');
    });
}


function addTime(seconds) {
    timeLeft += seconds;
    score += 1000 * seconds; 
}
function subtractTime(seconds) {
    timeLeft = Math.max(0, timeLeft - seconds);
}

function endQuiz(message) {
    if (!quizEnded && currentQuestionIndex === quizData.length && !promptShown) {
        quizEnded = true;
        promptShown = true;
        clearInterval(timer);
        hideQuiz();  
        showResult(message);
    }
}

function showResult(message) {
    resultContainer.classList.remove('hide');
    resultMessage.textContent = message;
    scoreMessage.textContent = `Your score: ${score}`;

    if (message === "You Lose!") {
        initialsContainer.classList.add('hide');
    } else {
        initialsContainer.classList.remove('hide');
    }

    resetQuiz();
}

function calculateScore() {
    var correctAnswers = 0;

    quizData.forEach(questionData => {
        questionData.answers.forEach(answer => {
            if (answer.selected && answer.correct) {
                correctAnswers++;
            }
        });
    });

    return correctAnswers;
}

function saveScoreAndInitials(initials) {
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push({ score: score, initials: initials });
    highScores.sort((a, b) => b.score - a.score);
    highScores = highScores.slice(0, 5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function displayHighScores() {
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    var highScoresString = "High Scores:\n";
    highScores.forEach((entry, index) => {
        highScoresString += `${index + 1}. ${entry.initials}: ${entry.score}\n`;
    });
    alert(highScoresString);
}


function saveScore() {
    var initialsInput = document.getElementById('initials');
    var initials = initialsInput.value.toUpperCase();

    if (initials !== "") {
        var userScore = { initials: initials, score: score };
        savedScores.push(userScore);
        updateScoresList();
        initialsContainer.classList.add('hide');
    }
}

function updateScoresList() {
    var scoresList = document.getElementById('scores-list');
    scoresList.innerHTML = ''; 

    savedScores.forEach(function (userScore) {
        var listItem = document.createElement('li');
        listItem.textContent = userScore.initials + ': ' + userScore.score;
        scoresList.appendChild(listItem);
    });
}

function resetScores() {
    savedScores = [];
    updateScoresList();
}

function showQuiz() {
    quizContainer.style.display = 'block';
}

function hideQuiz() {
    quizContainer.style.display = 'none';
}

resetQuiz();

