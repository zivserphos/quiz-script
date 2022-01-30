const path = require("path");
const fs = require("fs");

let totalQuestionsInsert = 0;

const files = fs.readdirSync("./questions");

files.map((fileName) => {
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
  );
  const updatedFile = content.map((question) => {
    const newOptions = question.options.map((option, i) => {
      const numOfbr = option.split("\r\n");
      if (numOfbr.length === 2) return option.split("\r\n")[0];
      if (numOfbr.length === 3 && i === 3) return option.split("\r\n")[0];
      return option;
    });
    return { ...question, options: newOptions };
  });
  totalQuestionsInsert += updatedFile.length;
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});

console.log(totalQuestionsInsert);
