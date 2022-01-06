const path = require("path");
const fs = require("fs");
const genQuery = require("./helpers/genQuery");
const genAns = require("./helpers/genAns");
const genCode = require("./helpers/genCode");

const filesToConvert = ["javaScript", "css", "html", "mongo", "react", "adobe"];
filesToConvert.map((fileName) => {
  const file = fs
    .readFileSync(`./questionsTxt/${fileName}.txt`)
    .toString()
    .split("###");

  const questions = file.slice(1).map((question, i) => {
    const query = genQuery(question);
    const code = genCode(question);
    const { options, correctAns } = genAns(question);
    if (!options || !correctAns) return;
    return {
      query,
      code,
      options,
      correctAns,
    };
  });
  const inserted = questions.reduce((a, q) => (q ? a + 1 : a), 0);
  console.log(`${fileName}.json: ${inserted} Question inserted`);
  fs.writeFileSync(`./questions/${fileName}.json`, JSON.stringify(questions));
});
