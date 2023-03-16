//first link start button to event listeners and get questions 

const start = document.getElementById('start');
const questions = document.getElementById('questions');


const startTimer = 2;
let timer = startTimer * 60;

const countdownEl = document.getElementById('time');
let questionIndex = 0;
let feedback = document.getElementById("feedback");

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
    displayQuestions(questionIndex);
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

    a.onclick = answerClickHandler;
    b.onclick = answerClickHandler;
    c.onclick = answerClickHandler;
    d.onclick = answerClickHandler;

}

function answerClickHandler (event) {

    console.log("answer clicked")
    let button=event.target;
    if (button.textContent !== quizQuestions[questionIndex].answer) {
        timer -= 10;
        if (timer < 0) {
            timer = 0;
        }
        const minutes = Math.floor(timer/60);
        let seconds = timer % 60;
        countdownEl.innerHTML = `${minutes}:${String(seconds).padStart(2,0)}`;

        feedback.textContent = "Incorrect";
    }
    else {
        feedback.textContent = "Correct"; 
    }
    feedback.setAttribute("class", "feedback");
    setTimeout(() => {
        feedback.setAttribute("class", "feedback hide")
    }, 1000);

    questionIndex++;

    if (questionIndex === questions.length || timer <= 0) {
        showFinalResult ();
    }
    else {
        displayQuestions(questionIndex);
    }
}

function showFinalResult () {
    //tbd 
    console.log("show final result");
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