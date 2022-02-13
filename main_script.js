const path = require("path");
const fs = require("fs");

const jsDiff = JSON.parse(fs.readFileSync("./answers/react.json").toString());

console.log(jsDiff);

const displayAsCodeFunc = (options) => {
  let str = false;
  options.map((option, i) => {
    if (option.split("\r\n").length > 3 && i < 3) str = true;
  });
  return str;
};
let questionWithCode = 0;
let totalQuestionsInsert = 0;
const files = fs.readdirSync("./questions");

files.map((fileName) => {
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
  );
  const updatedFile = content.map((question, i) => {
    if (displayAsCodeFunc(question.options)) questionWithCode += 1;
    const updatedQuestion = {
      query: question.query,
      options: question.options,
      correctAns: question.correctAns,
      difficulty: question.difficulty ? question.difficulty : null,
      displayAsCode: displayAsCodeFunc(question.options),
    };
    if (question.code) updatedQuestion.code = question.code;
    return updatedQuestion;
  });
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});

console.log(totalQuestionsInsert);
console.log(questionWithCode);
