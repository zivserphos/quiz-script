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

const a = [
  {
    query:
      " Q1. Which operator returns true if the two compared values are not equal?",
    options: [" `<>`\r\n", " `~`\r\n", " `==!`\r\n", " `!==`\r\n\r\n"],
    correctAns: 4,
  },
  {
    query: " Q2. How is a forEach statement different from a for statement?",
    options: [
      " Only a for statement uses a callback function.\r\n",
      " A for statement is generic, but a forEach statement can be used only with an array.\r\n",
      " Only a forEach statement lets you specify your own iterator.\r\n",
      " A forEach statement is generic, but a for statement can be used only with an array.\r\n\r\n",
    ],
    correctAns: 2,
    difficulty: "Easy",
  },
  {
    query:
      " Q3. Review the code below. Which statement calls the addTax function and passes 50 as an argument? How would you use this function to find out how much tax should be paid on \\$50?",
    code: "js\r\nfunction addTax(total) {\r\n  return total * 1.05;\r\n}\r\n",
    options: [
      " addTax = 50;\r\n",
      " return addTax 50;\r\n",
      " addTax(50);\r\n",
      " addTax 50;\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query:
      " Q4. Which statement is the correct way to create a variable called rate and assign it the value 100?",
    options: [
      " let rate = 100;\r\n",
      " let 100 = rate;\r\n",
      " 100 = let rate;\r\n",
      " rate = 100;\r\n\r\n",
    ],
    correctAns: 1,
  },
  {
    query:
      ' Q5. Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?',
    options: [
      " var student = new Person();\r\n",
      " var student = construct Person;\r\n",
      " var student = Person();\r\n",
      " var student = construct Person();\r\n\r\n",
    ],
    correctAns: 1,
  },
  {
    query:
      " Q6. When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?",
    code: "js\r\nlet modal = document.querySelector('#result');\r\nsetTimeout(function(){\r\n    modal.classList.remove('hidden);\r\n}, 10000);\r\nconsole.log('Results shown');\r\n",
    options: [
      " after 10 second\r\n",
      " after results are received from the HTTP request\r\n",
      " after 10000 seconds\r\n",
      " immediately\r\n\r\n",
    ],
    correctAns: 4,
  },
  {
    query:
      ' Q7. Which snippet could you add to this code to print "food" to the console?',
    code: '\r\nclass Animal {\r\n  static belly = [];\r\n  eat () {\r\n    Animal.belly.push("food");\r\n    }\r\n}\r\nlet a = new Animal();\r\na.eat();\r\nconsole.log(/* Snippet Here */); //Prints food\r\n',
    options: [
      " `a.prototype.belly[0]`\r\n",
      " `Object.getPrototype0f (a).belly[0]`\r\n",
      " `Animal.belly[0]`\r\n",
      " `a.belly[0]`\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query:
      " Q8. You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?",
    code: "js\r\nfor (var i = 1; i <= 4; i++) {\r\n  setTimeout(function () {\r\n    console.log(i);\r\n  }, i * 10000);\r\n}\r\n",
    options: [
      "\r\n\r\n```javascript\r\nfor (var i = 1; i <= 4; i++) {\r\n  (function (i) {\r\n    setTimeout(function () {\r\n      console.log(j);\r\n    }, j * 1000);\r\n  })(j);\r\n}\r\n```\r\n\r\n",
      "\r\n\r\n```javascript\r\nwhile (var i=1; i<=4; i++) {\r\n  setTimeout(function() {\r\n    console.log(i);\r\n    }, i*1000);\r\n}\r\n```\r\n\r\n",
      "\r\n\r\n```javascript\r\nfor (var i = 1; i <= 4; i++) {\r\n  (function (j) {\r\n    setTimeout(function () {\r\n      console.log(j);\r\n    }, j * 1000);\r\n  })(i);\r\n}\r\n```\r\n\r\n",
      "\r\n\r\n```javascript\r\nfor (var j = 1; j <= 4; j++) {\r\n  setTimeout(function () {\r\n    console.log(j);\r\n  }, j * 1000);\r\n}\r\n```\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query: " Q9. How does a function create a closure?",
    options: [
      " It reloads the document whenever the value changes.\r\n",
      " It returns a reference to a variable in its parent scope.\r\n",
      " It completes execution without returning.\r\n",
      " It copies a local variable to the global scope.\r\n\r\n",
    ],
    correctAns: 2,
  },
  {
    query: " Q10. Which statement creates a new function called discountPrice?",
    code: null,
    options: [
      "\r\n\r\n```js\r\nlet discountPrice = function (price) {\r\n  return price * 0.85;\r\n};\r\n```\r\n\r\n",
      "\r\n\r\n```js\r\nlet discountPrice(price) {\r\n  return price * 0.85;\r\n};\r\n```\r\n\r\n",
      "\r\n\r\n```js\r\nlet function = discountPrice(price) {\r\n  return price * 0.85;\r\n};\r\n```\r\n\r\n",
      "\r\n\r\n```js\r\ndiscountPrice = function (price) {\r\n  return price * 0.85;\r\n};\r\n```\r\n\r\n",
    ],
    correctAns: 1,
  },
  {
    query: " Q11. What is the result in the console of running the code shown?",
    code: "js\r\nvar Storm = function () {};\r\nStorm.prototype.precip = 'rain';\r\nvar WinterStorm = function () {};\r\nWinterStorm.prototype = new Storm();\r\nWinterStorm.prototype.precip = 'snow';\r\nvar bob = new WinterStorm();\r\nconsole.log(bob.precip);\r\n",
    options: [
      " Storm()\r\n",
      " undefined\r\n",
      " 'rain'\r\n",
      " 'snow'\r\n\r\n",
    ],
    correctAns: 4,
  },
  {
    query:
      " Q12. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",
    options: [
      " /[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/\r\n",
      " /\\d\\d:\\d\\d:\\d\\d/\r\n",
      " /[0-9]+:[0-9]+:[0-9]+/\r\n",
      " / : : /\r\n\r\nNOTE: The first three are all partially correct and will match digits, but the **second option is the most correct** because it will **only** match **2 digit** time values (12:00:32). The first option would have worked if the repitions range looked like `[0-9]{2}`, however because of the **comma** `[0-9]{2,}` it will select 2 **or more** digits (120:000:321). The third option will any range of time digits, single _and_ multiple (meaning `1:2:3` will also match).\r\n\r\n**More resources:**\r\n\r\n- [Repeating characters](https://regexone.com/lesson/repeating_characters)\r\n- [Kleene operators](https://regexone.com/lesson/kleene_operators)\r\n\r\n",
    ],
    correctAns: 2,
  },
  {
    query: " Q13. What is the result in the console of running this code?",
    code: "js\r\n'use strict';\r\nfunction logThis() {\r\n  this.desc = 'logger';\r\n  console.log(this);\r\n}\r\nnew logThis();\r\n",
    options: [
      " undefined\r\n",
      " window\r\n",
      ' {desc: "logger"}\r\n',
      " function\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query: " Q14. How would you reference the text 'avenue' in the code shown?",
    code: "js\r\nlet roadTypes = ['street', 'road', 'avenue', 'circle'];\r\n",
    options: [
      " roadTypes.2\r\n",
      " roadTypes\\[3\\]\r\n",
      " roadTypes.3\r\n",
      " roadTypes\\[2\\]\r\n\r\n",
    ],
    correctAns: 4,
  },
  {
    query: " Q15. What is the result of running this statement?",
    code: "javascript\r\nconsole.log(typeof 42);\r\n",
    options: [
      " 'float'\r\n",
      " 'value'\r\n",
      " 'number'\r\n",
      " 'integer'\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query:
      " Q16. Which property references the DOM object that dispatched an event?",
    options: [" self\r\n", " object\r\n", " target\r\n", " source\r\n\r\n"],
    correctAns: 3,
  },
  {
    query:
      " Q17. You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?",
    code: "js\r\nfunction addNumbers(x, y) {\r\n  if (isNaN(x) || isNaN(y)) {\r\n  }\r\n}\r\n",
    options: [
      " exception('One or both parameters are not numbers')\r\n",
      " catch('One or both parameters are not numbers')\r\n",
      " error('One or both parameters are not numbers')\r\n",
      " throw('One or both parameters are not numbers')\r\n\r\n",
    ],
    correctAns: 4,
  },
  {
    query: " Q18. Which method converts JSON data to a JavaScript object?",
    options: [
      " JSON.fromString();\r\n",
      " JSON.parse()\r\n",
      " JSON.toObject()\r\n",
      " JSON.stringify()\r\n\r\n",
    ],
    correctAns: 2,
  },
  {
    query: " Q19. When would you use a conditional statement?",
    options: [
      " When you want to reuse a set of statements multiple times.\r\n",
      " When you want your code to choose between multiple options.\r\n",
      " When you want to group data together.\r\n",
      " When you want to loop through a group of statement.\r\n\r\n",
    ],
    correctAns: 2,
  },
  {
    query:
      " Q20. What would be the result in the console of running this code?",
    code: "js\r\nfor (var i = 0; i < 5; i++) {\r\n  console.log(i);\r\n}\r\n",
    options: [" 12345\r\n", " 1234\r\n", " 01234\r\n", " 012345\r\n\r\n"],
    correctAns: 3,
  },
  {
    query:
      " Q21. Which Object method returns an iterable that can be used to iterate over the properties of an object?",
    options: [
      " Object.get()\r\n",
      " Object.loop()\r\n",
      " Object.each()\r\n",
      " Object.keys()\r\n\r\n",
    ],
    correctAns: 4,
  },
  {
    query: " Q22. What will be logged to the console?",
    code: "js\r\nvar a = ['dog', 'cat', 'hen'];\r\na[100] = 'fox';\r\nconsole.log(a.length);\r\n",
    options: [" 101\r\n", " 3\r\n", " 4\r\n", " 100\r\n\r\n"],
    correctAns: 1,
  },
  {
    query:
      " Q23. What is one difference between collections created with Map and collections created with Object?",
    options: [
      " You can iterate over values in a Map in their insertion order.\r\n",
      " You can count the records in a Map with a single method call.\r\n",
      " Keys in Maps can be strings.\r\n",
      " You can access values in a Map without iterating over the whole collection.\r\n\r\n**Explanation:** `Map.prototype.size returns the number of elements in a Map, whereas Object does not have a built-in method to return its size.`\r\n",
    ],
    correctAns: 2,
  },
  {
    query: " Q24. What is the value of dessert.type after executing this code?",
    code: "js\r\nconst dessert = { type: 'pie' };\r\ndessert.type = 'pudding';\r\n",
    options: [
      " pie\r\n",
      " The code will throw an error.\r\n",
      " pudding\r\n",
      " undefined\r\n\r\n",
    ],
    correctAns: 3,
  },
  {
    query: " Q25. 0 && hi",
    options: [" ReferenceError\r\n", " True\r\n", " 0\r\n", " false\r\n\r\n"],
    correctAns: 3,
  },
];

a.map((question) => {
  let answers = "";
  if (!question.query.includes("\r\n")) question.query += "\r\n";
  question.options.map((option) => (answers += option));
  console.log(`${question.query} ${question.code || ""} ${answers}`);
});
