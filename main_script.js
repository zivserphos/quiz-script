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
      if (option.includes("**Reference:**"))
        return option.split("**Reference:**")[0];
      return option;
    });
    return { ...question, options: newOptions };
  });
  totalQuestionsInsert += updatedFile.length;
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});

console.log(totalQuestionsInsert);

// const updatedFile = content.map((question) => {
//   const newOptions = question.options.map((option, i) => {
//     const numOfbr = option.split("\r\n");
//     if (option.split("\r\n").length !== 1) {
//       console.log(fileName, option.split("\r\n").length);
//       fileswithbr.find((file) => fileName === file)
//         ? null
//         : fileswithbr.push(fileName);
//     }
//   });
//   return { ...question, options: newOptions };
// });
// totalQuestionsInsert += updatedFile.length;
