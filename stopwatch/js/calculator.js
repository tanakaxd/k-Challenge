class Calculator {

    constructor() {
        this.accumulator = 0;
    }

    addReturn(a, b) {
        let answer = a + b;
        return answer;
    }

    add(number) {
        this.accumulator += number;
    }

}

console.log("calculator.js");