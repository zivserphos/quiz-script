const whenCode = (question) => {
  const codeAndAns = question.split("```");
  const query = question.split("?")[0];
  let code = codeAndAns[codeAndAns.length - 2];
  let answers = codeAndAns[codeAndAns.length - 1];
  code = code.split("\n").join("");
  answers = answers
    .split(/- \[ ?x?\]/)
    .slice(1)
    .map((option) => option.split("\n").join(""));
  return {
    query,
    code,
    answers,
  };
};

module.exports = whenCode;
