const path = require("path");
const fs = require("fs");
const genQuery = require("./genQuery");
const genAns = require("./genAns");
const genCode = require("./genCode");

const file = fs.readFileSync("./adobe.txt").toString().split("###");

const questions = file.map((question) => {
  const query = genQuery(question);
  const code = genCode(question);
  const { options, correctAns } = genAns(question);
  return {
    query,
    code,
    options,
    correctAns,
  };
});

fs.writeFileSync("./adobe.json", JSON.stringify(questions));
