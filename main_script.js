const path = require("path");
const fs = require("fs");

const php = JSON.parse(fs.readFileSync("./php1.json").toString());
const updatedPhp = [];
php.map((question) => {
  if (question && question.query) updatedPhp.push(question.query);
});
console.log(updatedPhp);

let questionWithCode = 0;
let totalQuestionsInsert = 0;
const files = fs.readdirSync("./questions");

files.map((fileName) => {
  questionWithCode = 0;
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
  );
  if (fileName.includes("php")) console.log(content.length);
  let counter = 0;
  const updatedFile = content.map((question, i) => {
    // const numOfbr = question.options.split("\r\n");
    let updatedQuery = question.query;
    if (fileName === "php.json" && question.query.startsWith(" ")) {
      updatedQuery = question.query.slice(1);
    }

    return { ...question, query: updatedQuery };
  });
  totalQuestionsInsert += updatedFile.length;
  // console.log(`${fileName}: ${questionWithCode} questions with code`);
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});
