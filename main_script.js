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
    let updatedQuery = question.query;
    if (question.query.startsWith(" ")) {
      // questionWithCode += 1;
      updatedQuery = question.query.slice(1);
    }

    return { ...question, query: updatedQuery };
  });
  totalQuestionsInsert += updatedFile.length;
  console.log(`${fileName}: ${questionWithCode} questions with code`);
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});
