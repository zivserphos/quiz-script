const path = require("path");
const fs = require("fs");
const genQuery = require("./helpers/genQuery");
const genAns = require("./helpers/genAns");
const genCode = require("./helpers/genCode");

let totalQuestionsInsert = 0;
let totalQuestionsInsert1 = 0;
let totalQuestionsNotInserted = 0;
// let nullQuestions;
let totalNullQuestions = 0;

const files = fs.readdirSync("./questionsNotFilter");
const filterdFiles = fs.readdirSync("./questions");
files.map((fileName) => {
  const content = JSON.parse(
    fs.readFileSync(`./questionsNotFilter/${fileName}`).toString()
  );
  totalQuestionsInsert += content.length;
});
filterdFiles.map((fileName) => {
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
  );
  totalQuestionsInsert1 += content.length;
});

// console.log(
//   `${totalQuestionsInsert} questions inserted \r\n ${totalQuestionsNotInserted} questions not inserted`
// );
fs.writeFileSync("a.json", "SAFffffffff");
