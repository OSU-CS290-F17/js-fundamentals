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
