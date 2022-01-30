const question = {
  query: " Q16. What is the output of this code?",
  code: 'cpp\r\n#include <iostream>\r\n\r\nint main(){\r\n    int x=10, y=20;\r\n    std::cout << "x = " << x++ << " and y = " << --y << std::endl;\r\n    std::cout << "x = " << x-- << " and y = " << ++y << std::endl;\r\n    return(0);\r\n}\r\n',
  options: [
    " `x = 10 and y = 20`  \r\n       `x = 11 and y = 19`\r\n",
    " `x = 11 and y = 19`  \r\n       `x = 10 and y = 20`\r\n",
    " `x = 10 and y = 19`  \r\n       `x = 11 and y = 20`\r\n",
    " `x = 11 and y = 20`  \r\n       `x = 10 and y = 19`\r\n\r\n",
  ],
  correctAns: 3,
};

const x = (question) => {
  let answers = "";
  if (!question.query.includes("\r\n")) question.query += "\r\n";
  question.options.map((option) => (answers += option));
  console.log(
    `${question.query} ${question.code || ""} ${answers} correct answer: ${
      question.correctAns
    }`
  );
};
const a = 10;

x(question);
