// REFACTOR TO ES6

// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.

// function sum(x, y) {
//     var sum = 0;
//     for(i = x; i <= y; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(sum(2, 8));


var sumNum = (x, y) => {
  var sum = 0;
    for(i = x; i <= y; i++) {
        sum = sum + i;
    }
    return sum;
}


// Write a loop that will go through an array, find the minimum value, and then return it
// function minimum(array) {
//   var min = array[0];
//   for(i=1; i <= array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return (min);
// }


var minimum = (array) => {
  var min = array[0];
  for(i=1; i <= array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return (min);
}

console.log(minimum([1, 5, 90, 25, -3, 0, -50, -55]));

// Write a loop that will go through an array, find the average of all of the values, and then return it

function average(array) {
  var subtotal = 0;
  for(i=0; i < array.length; i++ ) {
    subtotal = subtotal + array[i];
  }
  var avg = subtotal/array.length;
  return avg;
}

console.log(average([1, 2, 3]));

// Rewrite these 3 as anonymous functions assigned to variables.

var sumFunction = function(x, y) {
    var sum = 0;
    for(i = x; i <= y; i++) {
        sum = sum + i;
    }
    console.log(sum);
};

var minimum = function(array) {
  var min = array[0]
  for(i=1; i <= array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}


var average = function(array) {
  var sum = 0
  for(i=0; i < array.length; i++ ) {
    sum = sum + array[i]
  }
  var avg = sum/array.length
  return avg
}


// Rewrite these as methods of an object
var calculator = {
    sum: function(x, y) {
      var total = 0;
      for(i = x; i <= y; i++) {
        total = total + i;
      }
      return total;
    },
    minimum: function(array) {
      var min = array[0];
      for(i=1; i <= array.length; i++) {
        if (array[i] < min) {
        min = array[i];
        }
      }
      return (min);
    },
    average: function(array) {
      var subtotal = 0;
      for(i=0; i < array.length; i++ ) {
        subtotal = subtotal + array[i];
      }
      var avg = subtotal/array.length;
      return avg;
    },
};

console.log(calculator.sum(2, 8));
console.log(calculator.minimum([1, 5, 90, 25, -3, 0, -50, -55]));
console.log(calculator.average([1, 2, 3]));


// Create a JavaScript object called person with the following properties/methods:
// Properties:
// name - set this as your own name
// distance_traveled - set this initially as zero
// Methods:
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1

var person = {
    name: "Krista",
    distance_traveled : 0,
    say_name: function() {
      console.log(this.name)
    },
    say_something: function(phrase) {
      console.log(this.name + " says '" + phrase + "'");
      return person;
    },
    walk: function() {
      console.log(this.name + " is walking.");
      this.distance_traveled += 3;
      return person;
    },
    run: function() {
      console.log(this.name + " is running.");
      this.distance_traveled += 10;
      return person;
    },
    crawl: function() {
      console.log(this.name + " is crawling.");
      this.distance_traveled += 1;
      return person;
    },
};

person.say_name();
person.say_something("I am cool");
person.walk();
person.run();
person.crawl();
console.log(person.distance_traveled);