const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyperlinks and Text Markup Language",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Making Language",
    d: "Hyper Text Mark Language",
    correct: "a",
  },
  {
    question: "What does CSS stand for?",
    a: "Colorful StyleSheet",
    b: "Creative Style Sheet",
    c: "Cascading Style Sheet",
    d: "Computer Style Sheet",
    correct: "b",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    a: "<script>",
    b: "<style>",
    c: "<html>",
    d: "<svg>",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<js></js>",
    b: "<javascript></javascript>",
    c: "<script></script>",
    d: "<scripting>",
    correct: b,
  },
  {
    question: "How does a WHILE loop start?",
    a: "while(i <= 0)",
    b: "while(i <= 0 i++)",
    c: "while i <= 0",
    d: "while (i++ i <= 0)",
    correct: 0,
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
