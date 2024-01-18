"use strict";
const answers = [];

// call
welcomeMsg();
// call
ageCheck();

if (window.confirm("Do you want to skip welcoming message")) {
  // do nothing
} else {
  window.alert(answers[2]);
}

const subQuestions = [
  window.prompt("Do you like Cars. (Yes, No)"),
  window.prompt("Do you like Cats. (Yes, No)"),
  window.prompt("Do you like Dogs. (Yes, No)"),
];

// call
collectUserAnswers(subQuestions);
// call
printAnswers(answers);

// age Check
function ageCheck() {
  let input = window.prompt("What is your age");
  while (input <= 0) {
    input = window.prompt("Please enter a valid age");
  }
  answers.push(input);
  return input;
}

// welcom message
function welcomeMsg() {
  const userName = window.prompt("Hi there, please enter your name");
  const userGender = window.prompt("What is your Gender (male, female)");
  let message = "Hello ";
  if (userGender === "male") {
    message = message + "Mr " + userName;
  } else if (userGender === "female") {
    message = message + "Ms " + userName;
  } else {
    message = message + userName;
  }
  answers.push(userName);
  answers.push(userGender);
  answers.push(message);
}

// user answers collecting
function collectUserAnswers(questionsArr) {
  for (let i = 0; i < questionsArr.length; i++) {
    let input = answerCheck(questionsArr[i]);
    answers.push(input);
  }
}

// check for answer
function answerCheck(answer) {
  if (answer === "Yes") {
    return answer;
  } else if (answer === "No") {
    return answer;
  } else {
    return "invalid";
  }
}

// print answers
function printAnswers(answersArr) {
  for (let i = 0; i < answersArr.length; i++) {
    console.log(answersArr[i]);
  }
}
