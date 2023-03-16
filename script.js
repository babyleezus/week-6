//first link start button to event listeners and get questions 

const start = document.getElementById('start');
const questions = document.getElementById('questions');


const startTimer = 2;
let timer = startTimer * 60;

const countdownEl = document.getElementById('time');


//function to show timer 
function countdownTimer() {
    const minutes = Math.floor(timer/60);
    let seconds = timer % 60;
    countdownEl.innerHTML = `${minutes}:${String(seconds).padStart(2,0)}`;
    timer--; 
}

start.addEventListener('click', startQuiz); //quiz begins when you press the buttion 


//function to change the start screen adn load questions when you click the start button
function startQuiz() {
    start.classList.add('hide')
    questions.classList.remove('hide')
    setInterval(countdownTimer, 1000);
    displayQuestions(0);
}




function displayQuestions (i) {
    const question = document.getElementById('question-title');
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const c = document.getElementById('c');
    const d = document.getElementById('d');
    let quizQuestion = quizQuestions[i].question;
     
                    
    question.innerHTML = quizQuestion;
    a.innerHTML = quizQuestions[i].answers[0];
    b.innerHTML = quizQuestions[i].answers[1];
    c.innerHTML = quizQuestions[i].answers[2];
    d.innerHTML = quizQuestions[i].answers[3];

}



const quizQuestions = [
    {
        question: 'What is the programming language used in the browser?',
        answer: 'JavaScript',
        answers: [
        'Python',
        'JavaScript',
        'C++',
        'Rust'
        ]
    },
    {
        question: 'Which of these is not a primitive data type?',
        answer: 'objects',
        answers: [
        'objects',
        'numbers',
        'strings',
        'booleans'
        ]
        
    },
    {
        question: 'Which of the following is NOT the correct format for a function?',
        answer: '',
        answers: [
        'Python',
        'JavaScript',
        'C++',
        'Rust'
        ]
    },
    {
        question: 'What does API stand for?',
        answer: 'Application Programming Interface',
        answers: [
        'Advanced Parameter Intialisation',
        'Assigned Primitive Integer',
        'Applied Prototype Integration',
        'Application Programming Interface'
        ]
    },
    {
        question: 'Which of the following is NOT a type of loop in JavaScript?',
        answer: 'For... when...',
        answers: [
        'Do...while...',
        'For... when...',
        'While...',
        'For... in ...'
        ]
    },
    {
        question: 'What method is used to ',
        answer: '',
        answers: [
        'Python',
        'JavaScript',
        'C++',
        'Rust'
        ]
    },
    {
        question: 'What is the programming language used in the browser?',
        answer: '',
        answers: [
        'Python',
        'JavaScript',
        'C++',
        'Rust'
        ]
    }
]



//function that when you click on the answer the next button appears 

//function for when the question are finished/timer is up then the quiz/timer stops

//function for end screen when all questions are complete 