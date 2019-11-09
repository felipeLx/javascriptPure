// conditional if else
// 18-45 target demographic

// var age = prompt('Age?');
var age = 45;
if((age >= 18) && (age <= 35)) {
    status = 'target demo';
} else {
    status = 'not my audience';
}

console.log(status);

// switch statements
// weekday vs wekend
// day 0 - sunday
// day 6 - staturday
// day 4 - thursday = weekday

var day = [0, 1, 2, 3, 4, 5, 6];
let choice = Math.random(day);

switch(choice) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
        break;
}

console.log(text);
