//first link start button to event listeners and get questions 

const start = document.getElementById('start');
const questions = document.getElementById('questions');

const startTimer = 2;
let timer = startTimer * 60;

const countdownEl = document.getElementById('time');



function countdownTimer() {
    const minutes = Math.floor(timer/60);
    let seconds = timer % 60;
    countdownEl.innerHTML = `${minutes}:${String(seconds).padStart(2,0)}`;
    timer--; 
}



start.addEventListener('click', startQuiz);

function startQuiz() {
    console.log('started')
    start.classList.add('hide')
    questions.classList.remove('hide')
    setInterval(countdownTimer, 1000);
}

const quizQuestions = [
    {
        question: 'What is the programming language used in the browser?',
        a: 'Python',
        b: 'JavaScript',
        c: 'C++',
        d: 'Rust',
        answer: b
    },
    {
        question: 'Which of these is not a primitive data type?',
        a: 'objects',
        b: 'numbers',
        c: 'strings',
        d: 'booleans',
        answer: a
    },
    {
        question: 'Which of the following is NOT the correct format for a function',
        a: 'Python',
        b: 'JavaScript',
        c: 'C++',
        d: 'Rust'
        
    },
    {
        question: 'What does API stand for?',
        a: 'Advanced Parameter Intialisation',
        b: 'Assigned Primitive Integer',
        c: 'Applied Prototype Integration',
        d: 'Application Programming Interface'
    },
    {
        question: 'Which of the following is NOT a type of loop in JavaScript?',
        a: 'Do...while...',
        b: 'For... when...',
        c: 'While...',
        d: 'For... in ...'
    },
    {
        question: 'What method is used to ',
        a: 'Python',
        b: 'JavaScript',
        c: 'C++',
        d: 'Rust'
    },
    {
        question: 'What is the programming language used in the browser?',
        a: 'Python',
        b: 'JavaScript',
        c: 'C++',
        d: 'Rust'
    }
]