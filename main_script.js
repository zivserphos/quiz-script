const path = require("path");
const fs = require("fs");

const jsDiff = JSON.parse(fs.readFileSync("./answers/react.json").toString());

console.log(jsDiff);

let questionWithCode = 0;
let totalQuestionsInsert = 0;
const files = fs.readdirSync("./questions");

files.map((fileName) => {
  questionWithCode = 0;
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
  );
  let counter = 0;
  const updatedFile = content.map((question, i) => {
    const updatedQuestion = {
      query: question.query,
      options: question.options,
      correctAns: question.correctAns,
      difficulty: question.difficulty ? question.difficulty : null,
      displayAsCode: displayAsCodeFunc(question.options),
    };
    if (question.code) updatedQuestion.code = question.code;
  });
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});

const displayAsCodeFunc = (options) => {
  const str = false;
  options.map((option, i) => {
    if (option.split("\r\n").length > 3 && i < 3) str = true;
  });
  return str;
};

console.log(totalQuestionsInsert);
