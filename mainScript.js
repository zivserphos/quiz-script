const path = require("path");
const fs = require("fs");
const whenCode = require("./helpers/whenCode");
const whenNotCode = require("./helpers/whenNotCode");

const a = fs.readFileSync("./React.txt").toString().split("####");

const questionsWithCode = [];
const questionsWithOutCode = [];

a.map((question, i) => {
  if (i === 0) {
    i++;
    return;
  }
  const query = question.split("?")[0];
  let code = question.split("```")[1];
  let answers = question.split("```")[2];
  if (code) {
    questionsWithCode.push(whenCode(question));
  } else {
    questionsWithOutCode.push(whenNotCode(question));
  }
});

const questions = [...questionsWithOutCode, ...questionsWithCode];

const questionsInserted = questions.reduce(
  (a, b) => (b && b.answers.length === 4 ? a + 1 : a),
  0
);

const questionsNotInserted = questions.reduce(
  (a, b) => (!b || !b.answers.length === 4 ? a + 1 : a),
  0
);
console.log(
  `questionsInserted: ${questionsInserted} \n
  questions Not Inserted: ${questionsNotInserted}`
);
let i = 0;
const validQuestions = [];
questions.map((question) => {
  if (question && question.answers.length === 4) {
    question.answers[3] = question.answers[3].split("[Ref")[0];
    validQuestions.push(question);
  }
});
console.log(validQuestions.length);

fs.writeFileSync("./TestReact.json", JSON.stringify(validQuestions));
