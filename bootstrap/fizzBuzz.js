let output = [];

let count = 1;
let fizz = "Fizz";
let buzz = "Buzz";

function fizzBuzz() {
    while(count <= 100) {
    if(count % 3 === 0 && count % 5 === 0) {
        output.push(fizz + buzz);
    }
     else if(count % 3 === 0) {
        output.push(fizz);
    } else if(count % 5 === 0){
        output.push(buzz);
    } else {
        output.push(count);
    }
    
    count++;
}

    console.log(output);
    
}