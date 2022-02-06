const path = require("path");
const fs = require("fs");

<<<<<<< HEAD
const jsAns = JSON.parse(fs.readFileSync("./answers/js.json").toString());

console.log(jsAns);

=======
>>>>>>> parent of 6124403 (updated php)
let questionWithCode = 0;
let totalQuestionsInsert = 0;
const files = fs.readdirSync("./questions");

files.map((fileName) => {
  questionWithCode = 0;
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
<<<<<<< HEAD
  ).slice(25);
  if (fileName === "javascript.json") console.log(content.length);
=======
  );
>>>>>>> parent of 6124403 (updated php)
  let counter = 0;
  const updatedFile = content.map((question) => {
    // const numOfbr = question.options.split("\r\n");
    let updatedQuery = question.query;
<<<<<<< HEAD
    if (
      fileName === "javascript.json" &&
      question.query.includes("What value does this code return?")
    ) {
      console.log(i);
=======
    if (question.query === "") {
      questionWithCode += 1;
      console.log(fileName);
>>>>>>> parent of 6124403 (updated php)
    }

    return { ...question };
  });
  totalQuestionsInsert += updatedFile.length;
<<<<<<< HEAD
  // console.log(`${fileName}: ${questionWithCode} questions with code`);
  // fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
=======
  console.log(`${fileName}: ${questionWithCode} questions with code`);
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
>>>>>>> parent of 6124403 (updated php)
});
