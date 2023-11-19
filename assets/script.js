
//interferes when HTML is fully loaded before fires anything to happen or manipulate anything else
document.addEventListener('DOMContentLoaded', function () {

//variable declaration for ID's in HTML
var questionContainer = document.getElementById('question-container');
var buttonContainer = document.getElementById('answer-buttons');
var startButton = document.getElementById('start-button');
var nextButton = document.getElementById('next-button');


//variable for questions array
var questionData = [
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

];


//added to ensure that the start button is showing first
nextButton.style.display = 'none';



});

// functions of the IDs

//start button function

    // timer starts
    //button no longer displays

    //questions are presented