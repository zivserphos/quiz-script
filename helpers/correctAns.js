const correctAns = (answers) =>
  answers.split(/- \[/).reduce((a, c, i) => (c.startsWith("x") ? i : a), 0);
module.exports = correctAns;
