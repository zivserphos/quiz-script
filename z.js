const question = {
  query: " Q20. What is the best semantic markup for the sentence shown?",
  code: 'markdown\r\nOn July 21, 1969, Neil Armstrong said, "One small step for man, one giant leap for mankind."\r\n',
  options: [
    '<p>\r\n  On <time datetime="1969-07-21">July 21, 1969</time>, Neil Armstrong said,\r\n  <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"\r\n    >One small step for man, one giant leap for mankind.</q\r\n  >\r\n</p>\r\n',
    '<p>\r\n  On July 21, 1969, Neil Armstrong said,\r\n  <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"\r\n    >One small step for man, one giant leap for mankind.</q\r\n  >\r\n</p>\r\n',
    "<p>\r\n  On July 21, 1969, Neil Armstrong said, <q>One small step for man, one giant leap for mankind.</q>\r\n</p>\r\n",
    '<p>\r\n  On <time datetime="07-21-1969">July 21, 1969</time>, Neil Armstrong said,\r\n  <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"\r\n    >One small step for man, one giant leap for mankind.</q\r\n  >\r\n</p>\r\n',
  ],
  correctAns: 1,
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
