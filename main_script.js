const path = require("path");
const fs = require("fs");

let questionWithCode = 0;
let totalQuestionsInsert = 0;
const files = fs.readdirSync("./questions");

files.map((fileName) => {
  questionWithCode = 0;
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
  );
  let counter = 0;
  const updatedFile = content.map((question) => {
    // const numOfbr = question.options.split("\r\n");
    let updatedCode = question.code;
    if (question.code && question.code.endsWith("\r\n")) {
      questionWithCode += 1;
      updatedCode = question.code.substr(0, question.code.length - 2);
    }

    return { ...question, code: updatedCode };
  });
  totalQuestionsInsert += updatedFile.length;
  console.log(`${fileName}: ${questionWithCode} questions with code`);
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});
