// alert('hello');
// console.log('hello');

//challenge 1: your age in days
function ageInDaysFunction() {
    var birthYear = prompt('What year were you born?');
    var ageInDays = (2019 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days');
    h1.setAttribute('id', 'ageInDaysFunction');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDaysFunction').remove();
}

//challenge 2: Cat generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}