console.log("We are running JS");

console.log("");
console.log("============ Variables");
console.log("");

var thisIsAVariable;

var i = 16;
var pi = 3.1415;

var str = "abc";

var t = true;
var f = false;

var arr = [ 1, 2, 3 ];

var obj = { a: 1, b: 2, c: 3 };
var obj2 = { a: 1, b: 2, c: 3 };
var obj3 = obj;

var fn = function() { console.log("Within fn()"); };

console.log("typeof(i):", typeof(i));
console.log("typeof(pi):", typeof(pi));
console.log("typeof(t):", typeof(t));
console.log("typeof(obj):", typeof(obj));
console.log("typeof(thisIsAVariable):", typeof(thisIsAVariable));
console.log("thisIsAVariable:", thisIsAVariable);
fn();

console.log("");
console.log("============ Numbers");
console.log("");

console.log("9 / 5:", 9 / 5);

console.log("");
console.log("============ Comparisons");
console.log("");

console.log("2 == 2:", 2 == 2);
console.log("2 == 3:", 2 == 3);
console.log("2 == 'a':", 2 == 'a');
console.log("2 == '2':", 2 == '2');

console.log("2 === '2':", 2 === '2');
console.log("2 === 2:", 2 === 2);
console.log("2 === 3:", 2 === 3);

console.log("2 !== 3:", 2 !== 3);
console.log("2 !== 2:", 2 !== 2);
console.log("2 !== '2':", 2 !== '2');

console.log("obj == obj2:", obj == obj2);
console.log("obj === obj2:", obj === obj2);

console.log("obj == obj3:", obj == obj3);
console.log("obj === obj3:", obj === obj3);

console.log("");
console.log("============ Strings");
console.log("");

var str1 = "This is a 'string'";
var str2 = 'This is also a "string"';

console.log("str1:", str1);
console.log("str2:", str2);

var greeting = "Hello, my name is: ";
var name = "Rob";
var wholeGreeting = greeting + name;
console.log("wholeGreeting:", wholeGreeting);

var problem = "2 + 2 = ";
var answer = 4;
var problemAndAnswer = problem + answer;
console.log("problemAndAnswer:", problemAndAnswer);
console.log("problemAndAnswer.length:", problemAndAnswer.length);
console.log("problemAndAnswer[4]:", problemAndAnswer[4]);

console.log("'decathlon'.indexOf('cat'):", 'decathlon'.indexOf('cat'));
console.log("'team'.indexOf('i'):", 'team'.indexOf('i'));

console.log("'I love dogs.'.replace('dog', 'cat'):", 'I love dogs.'.replace('dog', 'cat'));
console.log("'I love dog dogs.'.replace('dog', 'cat'):", 'I love dog dogs.'.replace('dog', 'cat'));

console.log("");
console.log("============ Arrays");
console.log("");

var array1 = [ 1, 2, 3 ];
console.log("array1:", array1);

var array2 = [ 1, true, "three" ];
console.log("array2:", array2);

for (var j = 0; j < array2.length; j++) {
  console.log("array2[" + j + "]:", array2[j]);
}

console.log("'1,2,3,4'.split(','):", '1,2,3,4'.split(','));
console.log("[1,2,3,4].join(','):", [1,2,3,4].join(','));

function printArrayElem(elem, idx) {
  console.log("Element", idx, "is:", elem);
}

console.log("Using forEach():");
array2.forEach(printArrayElem);

function multBy2(val) {
  return val * 2;
}

var array1Times2 = array1.map(multBy2);
console.log("array1Times2:", array1Times2);

array1.push(4);
array1.push(5);
array1.push(6);
console.log("array1:", array1);

var popped = array1.pop();
console.log("popped:", popped);
array1.pop();
console.log("array1:", array1);

array1.unshift(-4);
array1.unshift(-5);
array1.unshift(-6);
console.log("array1:", array1);

array1.shift();
array1.shift();
console.log("array1:", array1);

console.log("");
console.log("============ Functions");
console.log("");

function addThreeThings(a, b, c) {
  // console.log("arguments:", arguments);
  return a + b + c;
}

console.log("addThreeThings(1, 2, 3):", addThreeThings(1, 2, 3));
console.log("addThreeThings('1', '2', '3'):", addThreeThings('1', '2', '3'));
console.log("addThreeThings(1, 2, 3) + 1:", addThreeThings(1, 2, 3) + 1);
console.log("addThreeThings(1, 2, 3):", addThreeThings(1, 2, 3));
console.log("addThreeThings(1, 2):", addThreeThings(1, 2));

function addManyThings() {
  var sum = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log("addManyThings(1, 2, 3):", addManyThings(1, 2, 3));
console.log("addManyThings(1, 2, 3, 4, 5, 6):", addManyThings(1, 2, 3, 4, 5, 6));

var value = 5;
array1.forEach(function (elem) {
  // var value = -100000;
  value += elem;
  console.log(value);
});

console.log("value:", value);

console.log("");
console.log("============ Objects");
console.log("");

var luke = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 22,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log("luke['firstName']:", luke['firstName']);
console.log("luke.firstName:", luke.firstName);

var key = 'lastName';
console.log("key:", key);
console.log("luke[key]:", luke[key]);

console.log("luke.getFullName():", luke.getFullName());

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

var person = new Person("Leia", "Organa", 23);
console.log("person:", person);
console.log("person.getFullName():", person.getFullName());

console.log("Person:", Person);
