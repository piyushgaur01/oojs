//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

//This constructor function is JS version of Class
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        console.info(
            this.name.first + ' ' +
            this.name.last + ' is ' +
            this.age + ' years old. He likes ' +
            this.interests[0] + ' and ' +
            this.interests[1] + '.');
    }
}

/**
 * IMPORTANT! Only the methods defined using Object.prototype can be OVERRIDDEN!!
 */

  Person.prototype.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
      };

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

//Lets say we want to create a 'Teacher' class. Now, Teacher is also a person and share many of its properties.

function Teacher(first, last, age, gender, interests, subject){

    // 'Call' function basically allows you to call a function defined somewhere else, but in the current context.
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}
//Sets the prototype of 'Teacher' to 'Person' so that it can inherit its properties.
Teacher.prototype = Object.create(Person.prototype);

//Setting the prototype of 'Teacher' back to 'Teacher' as properties inheritance is now complete.
Teacher.prototype.constructor = Teacher;

//Adding a new greeting method to 'Teacher' overriding the inherited one.
Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  console.info('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

/**
 * Try checking for following in console.
 */
/*
teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
*/