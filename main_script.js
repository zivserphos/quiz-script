const path = require("path");
const fs = require("fs");

const jsDiff = JSON.parse(fs.readFileSync("./answers/nodejs.json").toString());

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
    if (fileName === "nodejs.json" && i < 25) {
      question.difficulty = jsDiff[i].difficulty.toLowerCase();
    }
    return { ...question };
  });
  totalQuestionsInsert += updatedFile.length;
  // console.log(`${fileName}: ${questionWithCode} questions with code`);
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});

console.log(totalQuestionsInsert);
