//Array
let fruits = ['banana', 'apple', 'oranges', 'pineapples'];
let fruitsList = new Array('banana', 'apple', 'oranges', 'pineapples');

// can't use the let two times and call: error syntax
// alert (fruitsList[1]); // access value at index 1nd

fruitsList[0] = 'pear';
console.log(fruitsList);

for(let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
var toString = fruits.toString();
console.log('toString', toString);
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); //remove last item
console.log(fruits.push('blackberries'), fruits); //appends

fruits[4] = 'new fruit';
console.log(fruits);

fruits.shift(); // remove first element from a list
fruits.unshift('kiwi'); // add first element to an array

let vegetables = ['asparagus', 'tomate', 'brocoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 344];
console.log(someNumbers.sort(function(a, b) {
    return a-b; //ascending order
    // return b-a; //descending order
}));

let emptyArray = new Array();
for(let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

