const path = require("path");
const fs = require("fs");

let totalQuestionsInsert = 0;

const files = fs.readdirSync("./questions");

files.map((fileName) => {
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
  );
  totalQuestionsInsert += content.length;
  fs.mkdirSync(`./chunkquestions/${fileName}`);
  const numOfQuestions = content.length;
  let chunk = 1;
  let i = 0;
  while (i < numOfQuestions) {
    fs.writeFileSync(
      `./chunkquestions/${fileName}/${chunk}.json`,
      JSON.stringify(content.slice(i, i + 25))
    );
    chunk += 1;
    i += 25;
  }
});
