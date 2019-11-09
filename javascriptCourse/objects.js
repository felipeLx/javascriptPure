// objects in JavaScript
// dictionaries in Python

let student = {
    first: 'Rageh', 
    last: 'Log', 
    age: 25, 
    height: 170,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    } 
};

console.log(student.first);
console.log(student.last);

student.first = 'notRage'; //change value
console.log(student.first);

student.age++;
console.log(student.age);

console.log(student.studentInfo());


