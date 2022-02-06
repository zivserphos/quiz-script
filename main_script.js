const path = require("path");
const fs = require("fs");

const jsAns = JSON.parse(fs.readFileSync("./answers/js.json").toString());

console.log(jsAns);

let questionWithCode = 0;
let totalQuestionsInsert = 0;
const files = fs.readdirSync("./questions");

files.map((fileName) => {
  questionWithCode = 0;
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
  ).slice(25);
  if (fileName === "javascript.json") console.log(content.length);
  let counter = 0;
  const updatedFile = content.map((question, i) => {
    // const numOfbr = question.options.split("\r\n");
    let updatedQuery = question.query;
    if (
      fileName === "javascript.json" &&
      question.query.includes("What value does this code return?")
    ) {
      console.log(i);
    }

    return { ...question };
  });
  totalQuestionsInsert += updatedFile.length;
  // console.log(`${fileName}: ${questionWithCode} questions with code`);
  // fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});
