const path = require("path");
const fs = require("fs");

let optionsWithCode = 0;
let totalQuestionsInsert = 0;
const files = fs.readdirSync("./questions");

files.map((fileName) => {
  const content = JSON.parse(
    fs.readFileSync(`./questions/${fileName}`).toString()
  );
  let counter = 0;
  const updatedFile = content.map((question) => {
    const newOptions = question.options.map((option, i) => {
      const numOfbr = option.split("\r\n");
      if (option.includes("[explanation]") && option === 3) {
        return option.split("[explanation]")[0];
      }
      return option;
    });
    return { ...question, options: newOptions };
  });
  totalQuestionsInsert += updatedFile.length;
  console.log(`${fileName}: ${counter}`);
  optionsWithCode += counter;
  fs.writeFileSync(`./questions/${fileName}`, JSON.stringify(updatedFile));
});
console.log(optionsWithCode);
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
