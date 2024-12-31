console.log("tsk1");

for (let i = 0; i <= 9; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("task 2");

for (let i = 1; i <= 40; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
