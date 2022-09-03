import readlineSync from "readline-sync";
import chalk from 'chalk'
var score = 0;

var highScores = [
  {
    name: "Ravi",
    score: 1,
  },

  {
    name: "Deepak",
    score: 3,
  },
  {
    name: "Raju",
    score: 1,
  },
  {
    name: "Shiv",
    score: 4,
  },
]

// array of objects
var questionArray = [
  {
    question: "Who shot the first arrow that killed Bheeshma pitama?",
    answer: "Arjuna"
  }, {
    question: "Who is the well known charioteer of Dhritarashtra?",
    answer: ""
  },
  {
    question: "Who was the real father of Arjuna?",
    answer: "Indra"
  },
  {
    question: "Who is Pandu's oldest son?",
    answer: "Yudhisthira"
  },
  {
    question: "What famous text does Krsna dictate to Arjuna?",
    answer: "Bhagwad gita"
  }
];

function welcomeUser() {
  var firstName = readlineSync.question("Namaste! Please enter your name:");
  console.log(chalk.blue(firstName + " Apka swagat hai"));
}

function compareAnswer(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("right!"));
    score = score + 1;

  } else {
    console.log(chalk.red("Wrong!"));

  }

  console.log(chalk.whiteBright("Score " + score));
  console.log("-------------")
}


function startTheGame() {
  for (let i = 0; i < questionArray.length; i++) {
    compareAnswer(questionArray[i].question, questionArray[i].answer)
  }

}

function showScore() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcomeUser();
startTheGame();
showScore();