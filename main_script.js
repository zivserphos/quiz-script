// const path = require("path");
// const fs = require("fs");

// let totalQuestionsInsert = 0;

// const files = fs.readdirSync("./questions");

// files.map((fileName) => {
//   const content = JSON.parse(
//     fs.readFileSync(`./questions/${fileName}`).toString()
//   );
//   totalQuestionsInsert += content.length;
//   fs.mkdirSync(`./chunkquestions/${fileName}`);
//   const numOfQuestions = content.length;
//   let chunk = 1;
//   let i = 0;
//   while (i < numOfQuestions) {
//     fs.writeFileSync(
//       `./chunkquestions/${fileName}/${chunk}.json`,
//       JSON.stringify(content.slice(i, i + 25))
//     );
//     chunk += 1;
//     i += 25;
//   }
// });

const questions = [
  {
    query: " Q51. What value does this code return?",
    code: "js\r\nlet answer = true;\r\nif (answer === false) {\r\n  return 0;\r\n} else {\r\n  return 10;\r\n}\r\n",
    options: [" 10\r\n", " true\r\n", " false\r\n", " 0\r\n\r\n"],
    correctAns: 1,
  },
  {
    query: " Q52. What is the result in the console of running the code shown?",
    code: "js\r\nvar start = 1;\r\nfunction setEnd() {\r\n  var end = 10;\r\n}\r\nsetEnd();\r\nconsole.log(end);\r\n",
    options: [" 10\r\n", " 0\r\n", " ReferenceError\r\n", " undefined\r\n\r\n"],
    correctAns: 3,
  },
  {
    query: " Q53. What will this code log in the console?",
    code: "js\r\nfunction sayHello() {\r\n  console.log('hello');\r\n}\r\n\r\nconsole.log(sayHello.prototype);\r\n",
    options: [
      " undefined\r\n",
      ' "hello"\r\n',
      " an object with a constructor property\r\n",
      " an error message\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query:
      " Q54. Which collection object allows unique value to be inserted only once?",
    options: [" Object\r\n", " Set\r\n", " Array\r\n", " Map\r\n\r\n"],
    correctAns: 2,
  },
  {
    query: " Q55. What two values will this code print?",
    code: "js\r\nfunction printA() {\r\n  console.log(answer);\r\n  var answer = 1;\r\n}\r\nprintA();\r\nprintA();\r\n",
    options: [
      " `1` then `1`\r\n",
      " `1` then `undefined`\r\n",
      " `undefined` then `undefined`\r\n",
      " `undefined` then `1`\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query:
      " Q56. How does the `forEach()` method differ from a `for` statement?",
    options: [
      " forEach allows you to specify your own iterator, whereas for does not.\r\n",
      " forEach can be used only with strings, whereas for can be used with additional data types.\r\n",
      " forEach can be used only with an array, whereas for can be used with additional data types.\r\n",
      " for loops can be nested; whereas forEach loops cannot.\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query:
      " Q57. Which choice is an incorrect way to define an arrow function that returns an empty object?",
    options: [
      " => ({})\r\n",
      " => {}\r\n",
      " => { return {};}\r\n",
      " => (({}))\r\n\r\n",
    ],
    correctAns: 2,
  },
  {
    query: " Q58. Why might you choose to make your code asynchronous?",
    options: [
      " to start tasks that might take some time without blocking subsequent tasks from executing immediately\r\n",
      " to ensure that tasks further down in your code are not initiated until earlier tasks have completed\r\n",
      " to make your code faster\r\n",
      ' to ensure that the call stack maintains a LIFO (Last in, First Out) structure\r\n\r\n**EXPLANATION:** "to ensure that tasks further down in your code are not initiated until earlier tasks have completed" you use the normal (synchronous) flow where each command is executed sequentially. Asynchronous code allows you to break this sequence: start a long running function (AJAX call to an external service) and continue running the rest of the code in parallel.\r\n\r\n',
    ],
    correctAns: 1,
  },
  {
    query: " Q59. Which expression evaluates to true?",
    options: [
      " `[3] == [3]`\r\n",
      " `3 == '3'`\r\n",
      " `3 != '3'`\r\n",
      " `3 === '3'`\r\n\r\n",
    ],
    correctAns: 2,
  },
  {
    query: " Q60. Which of these is a valid variable name?",
    options: [
      " 5thItem\r\n",
      " firstName\r\n",
      " grand total\r\n",
      " function\r\n\r\n",
    ],
    correctAns: 2,
  },
  {
    query: " Q61. Which method cancels event default behavior?",
    options: [
      " cancel()\r\n",
      " stop()\r\n",
      " preventDefault()\r\n",
      " prevent()\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query: " Q62. Which method do you use to attach one DOM node to another?",
    options: [
      " attachNode()\r\n",
      " getNode()\r\n",
      " querySelector()\r\n",
      " appendChild()\r\n\r\n",
    ],
    correctAns: 4,
  },
  {
    query: " Q63. Which statement is used to skip iteration of the loop?",
    options: [" break\r\n", " pass\r\n", " skip\r\n", " continue\r\n\r\n"],
    correctAns: 4,
  },
  {
    query: " Q64. Which choice is valid example for an arrow function?",
    options: [
      " (a,b) => c\r\n",
      " a, b => {return c;}\r\n",
      " a, b => c\r\n",
      " { a, b } => c\r\n\r\n",
    ],
    correctAns: 1,
  },
  {
    query:
      " Q65. Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?",
    options: [
      " class\r\n",
      " generator function\r\n",
      " map\r\n",
      " proxy\r\n\r\n",
    ],
    correctAns: 1,
  },
  {
    query: " Q66. How do you add a comment to JavaScript code?",
    options: [
      " `! This is a comment`\r\n",
      " `# This is a comment`\r\n",
      " `\\\\ This is a comment`\r\n",
      " `// This is a comment`\r\n\r\n",
    ],
    correctAns: 4,
  },
  {
    query:
      " Q67. If you attempt to call a value as a function but the value is not a function, what kind of error would you get?",
    options: [
      " TypeError\r\n",
      " SystemError\r\n",
      " SyntaxError\r\n",
      " LogicError\r\n\r\n",
    ],
    correctAns: 1,
  },
  {
    query:
      " Q68. Which method is called automatically when an object is initialized?",
    options: [
      " create()\r\n",
      " new()\r\n",
      " constructor()\r\n",
      " init()\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query: " Q69. What is the result of running the statement shown?",
    code: "javascript\r\nlet a = 5;\r\nconsole.log(++a);\r\n",
    options: [" 4\r\n", " 10\r\n", " 6\r\n", " 5\r\n\r\n"],
    correctAns: 3,
  },
  {
    query:
      " Q70. You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?",
    code: "javascript\r\nbutton.addEventListener(\r\n  'click',\r\n  function (e) {\r\n    button.className = 'clicked';\r\n  },\r\n  false,\r\n);\r\n",
    options: [
      " e.blockReload();\r\n",
      " button.preventDefault();\r\n",
      " button.blockReload();\r\n",
      " e.preventDefault();\r\n\r\n",
    ],
    correctAns: 4,
  },
  {
    query:
      " Q71. Which statement represents the starting code converted to an IIFE?",
    options: [
      " `function() { console.log('lorem ipsum'); }()();`\r\n",
      " `function() { console.log('lorem ipsum'); }();`\r\n",
      " `(function() { console.log('lorem ipsum'); })();`\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query: " Q72. Which statement selects all img elements in the DOM tree?",
    options: [
      " `Document.querySelector('img')`\r\n",
      " `Document.querySelectorAll('<img>')`\r\n",
      " `Document.querySelectorAll('img')`\r\n",
      " `Document.querySelector('<img>')`\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query:
      " Q73. Why would you choose an asynchronous structure for your code?",
    options: [
      " To use ES6 syntax\r\n",
      " To start tasks that might take some time without blocking subsequent tasks from executing immediately\r\n",
      " To ensure that parsers enforce all JavaScript syntax rules when processing your code\r\n",
      " To ensure that tasks further down in your code aren't initiated until earlier tasks have completed\r\n\r\n",
    ],
    correctAns: 2,
  },
  {
    query:
      " Q74. What is the HTTP verb to request the contents of an existing resource?",
    options: [" DELETE\r\n", " GET\r\n", " PATCH\r\n", " POST\r\n\r\n"],
    correctAns: 2,
  },
  {
    query:
      " Q75. Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?",
    options: [" focus\r\n", " blur\r\n", " hover\r\n", " enter\r\n\r\n"],
    correctAns: 1,
  },
];

questions.map((question) => {
  let answers = "";
  if (!question.query.includes("\r\n")) question.query += "\r\n";
  question.options.map((option) => (answers += option.slice(1)));
  console.log(
    `${question.query} ${question.code || ""} ${answers} correct answer: ${
      question.correctAns
    }`
  );
});
