const whenNotCode = (question) => {
  const query = question.split("?")[0];
  let code = question.split("```")[1];
  let answers = question.split("```")[2];
  if (!question.split("?")[1])
    // console.log(question.split("\r\n"));

    // answers = question
    //   .split("?")[1]
    //   .split(/- \[ ?x?\]/)
    //   .map((option) => option.split("\n").join(""))
    //   .slice(1);
    return {
      query,
      code,
      answers,
      correctAns: correctAns(question),
    };
};

const correctAns = (question) => {
  // const options = question.split("?")[1].split("- [");
  // if (!options[1]) console.log(options);
  // for (let i = 1; i < 5; i++) {
  //   // if (options[i].startsWith("x")) return i;
  // }
};

module.exports = whenNotCode;
