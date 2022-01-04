const whenNotCode = (question) => {
  const query = question.split("?")[0];
  let code = question.split("```")[1];
  let answers = question.split("```")[2];
  answers = question
    .split("?")[1]
    .split(/- \[ ?x?\]/)
    .map((option) => option.split("\n").join(""))
    .slice(1);
  return {
    query,
    code,
    answers,
  };
};

module.exports = whenNotCode;
