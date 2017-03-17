// Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.

function person_constructor(name) {
    var person = {
        name: name,
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
    return person;
}

console.log(person_constructor("bob").walk().name)



// Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

function ninjaConstructor(name, cohort) {
    var ninja = {
        name: name,
        cohort: cohort,
        beltLevel : 'yellow',
        levelUp: function() {
          if (this.beltLevel == 'yellow') {
            this.beltLevel = 'red'
          } else if (this.beltLevel == 'red') {
            this.beltLevel = 'black'
          };
        }
    }
    return ninja;
}

var newNinja = ninjaConstructor("Bob", "Dec 2016");
newNinja.levelUp();
console.log(newNinja.beltLevel)