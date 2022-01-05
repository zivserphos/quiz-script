const correctAnswer = require("./helpers/correctAns");

const genAns = (question) => {
  let options;
  let correctAns;
  if (question.split("```").length === 1) {
    const answers = question.split("\r\n").slice(1).join("\r\n");
    correctAns = correctAnswer(answers);
    options = genOptions(question);
  }

  if (question.split("```").length === 3) {
    const answers = question.split("```")[2].split("\r\n").join("");
    correctAns = correctAnswer(answers);
    options = genOptions(question);
  }

  if (question.split("```").length === 5) {
    const answers = question.split("```")[4].split("\r\n").join("");
    correctAns = correctAnswer(answers);
    options = genOptions(question);
  }

  if (question.split("```").length === 9) {
    const answers = question.split("\r\n").slice(1).join("");
    correctAns = correctAnswer(answers);
    options = genOptions(question);
  }

  if (question.split("```").length === 11) {
    console.log(question.split("```")[4].split("\r\n").join(""));
  }
  if (options && options.length !== 0) {
    options[options.length - 1] = options[options.length - 1].split("[Ref")[0];
    options[options.length - 1] =
      options[options.length - 1].split("Source")[0];
    return { options, correctAns };
  }
};

const genOptions = (question) =>
  question
    .split("\r\n")
    .slice(1)
    .join("\r\n")
    .split(/- \[ ?x?\]/)
    .map((option) => option.split("\r\n").join(""))
    .slice(1);

module.exports = genAns;
