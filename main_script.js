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
      if (option.includes("```")) return option.split("```")[1];
      return option;
    });
    return { ...question, options: newOptions };
  });
  totalQuestionsInsert += updatedFile.length;
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});

console.log(totalQuestionsInsert);
