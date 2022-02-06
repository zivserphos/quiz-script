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
    if (question.code) {
      questionWithCode += 1;
      // updatedCode = question.code.slice(4);
    }

    return { ...question, code: updatedCode };
  });
  totalQuestionsInsert += updatedFile.length;
  console.log(`${fileName}: ${questionWithCode} questions with code`);
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});
