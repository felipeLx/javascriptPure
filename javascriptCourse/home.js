console.log('hello');
// alert('yooo');

// comment inline

// variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);



// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// numbers in JavaScript
var num1 = 5;
var num2 = 5.7;

var num3 = 10;
num3 = num3 + 1;
//or
//num3++; num3--;
console.log(num3);

var total = num1 + num2;
document.getElementById('someText').innerHTML = total;

// divide, multiple *, remainder %
num1 % 5;
console.log(num1);
console.log(num1 /6);

num1 += 10;
console.log(num1);

/*functions
1. create a function
2. call the function
*/
function fun() {
    //alert('this is a function');
    console.log('this is a function');
}

fun();

// take in a name and return something
function greeting(yourName) {

    var result  = 'Hello ' + name;

    console.log(result);
}
var name = prompt('fill with your name?');
greeting(name);

function sumNumber(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumber(10, 10);


