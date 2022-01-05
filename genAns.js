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
    let answers = question.split("```")[2].split("\r\n").join(""); // goes to the last one

    if (!answers.includes("[x]")) {
      answers = question.split("```")[1].split("\r\n").join("");
    }
    correctAns = correctAnswer(answers);
    options = genOptions(question);
  }

  if (question.split("```").length === 5) {
    const answers = question.split("```")[4].split("\r\n").join(""); // goes to the last one
    correctAns = correctAnswer(answers);
    options = genOptions(question);
  }

  if (question.split("```").length === 9) {
    const answers = question.split("\r\n").slice(1).join("");
    correctAns = correctAnswer(answers);
    options = genOptions(question);
  }

  if (question.split("```").length === 11) {
    const answers = question.split("```").slice(2).join("");
    correctAns = correctAnswer(answers);
    options = genOptions(question);
  }
  return { options, correctAns };
};

const genOptions = (question) => {
  let options = question
    .split("\r\n")
    .slice(1)
    .join("\r\n")
    .split(/- \[ ?x?\]/)
    .map((option) => option.split("\r\n").join(""))
    .slice(1);

  if (options.length === 0) {
    options = question
      .split("\r\n")
      .slice(1)
      .join("\r\n")
      .split(/\[?x?\]/)
      .map((option) => option.split("\r\n").join(""))
      .slice(1);
  }
  return options;
};

module.exports = genAns;
