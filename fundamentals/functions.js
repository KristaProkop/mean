// UPDATE Apr 2017: Refactored to ES6

// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger. 
// function runningLogger() {
//     console.log('I am running!')
// }

"use strict" 
var runner = () => { console.log('I am running!'); }
runner();

// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
// function multiplyByTen(num) {
//   var result = num * 10
//   return result
// }
// multiplyByTen(5)

var multiplyByTen = (num) => {
  var result = num * 10;
  return result;
}

multiplyByTen(5);

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string  
// function stringReturnOne() {
//   return "First String"
// }
// function stringReturnTwo() {
//   return "Second String"
// }

var stringReturnOne = () => { return 'First String'}
var stringReturnTwo = () => { return 'Second String'}

// Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned
// function caller(params) {
//   if ( typeof params == "function" ) {
//     params()
//   }
// }

var caller = (params) => {
  if (typeof params == 'function') {
    params();
  } else {
    return false
  }
}

// caller(runningLogger)
// Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns. 
// function myDoubleConsoleLog(param1, param2) {
//   if ( typeof param1 == "function" ) {
//     console.log(param1())
//   } if ( typeof param2 == "function") {
//     console.log(param2())
//   }
// }

var myDoubleConsoleLog = (param1, param2) => {
  if ( typeof param1 == "function" ) {
    console.log(param1());
  } if ( typeof param2 == "function") {
    console.log(param2());
  }
}

// myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.


// function caller2(input) {
//   console.log("starting");
//   setTimeout(input, 5000);
//   if ( typeof input == "function") {
//     input()
//   console.log('ending?');
//   return "interesting"
//   }
// }

var caller2 = (input) => {
  console.log("starting");
  setTimeout(input, 5000);
  if ( typeof input == "function") {
    input();
  console.log('ending?');
  return "interesting";
  };
}

caller2(myDoubleConsoleLog(stringReturnOne, stringReturnTwo));
