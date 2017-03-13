// Log each value. Add a new value (100) in the array x using a push method. 
var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];

for (var i=0; i < x.length; i++) {
  console.log(x[i]);
}

// // Add a new value (100) in the array x using a push method.
x.push(100);
console.log(x);

// // Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
y = ["hello", "world", "JavaScript is Fun"];
x.push(y);
console.log(x);

// // Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
var sum = 0;
for(i = 0; i <= 500; i++ ) {
  sum = sum + i;
}
console.log(sum);

// // Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var array = [-51, 1, 5, 90, 25, -3, 0, -50, -55];
// // without loop:
console.log(Math.min(...array));

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var sum = 0
for(i=0; i < array.length; i++ ) {
  sum = sum + array[i]
}

average = function(sum){
  var avg = sum/array.length
  return avg
}
console.log(average(sum))


// Write a for-in loop that will navigate through the object below (or write your own object) And console.log() each key value pair:

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja) {
    console.log(key + ": " + newNinja[key]);
}