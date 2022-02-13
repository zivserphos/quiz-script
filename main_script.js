const path = require("path");
const fs = require("fs");

const jsDiff = JSON.parse(fs.readFileSync("./answers/css.json").toString());

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
    if (fileName === "css.json" && i > 24 && i < 50) {
      // if (jsDiff[i - 50])
      question.difficulty = jsDiff[i - 25].difficulty.toLowerCase();
    }
    return { ...question };
  });
  totalQuestionsInsert += updatedFile.length;
  // console.log(`${fileName}: ${questionWithCode} questions with code`);
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});
