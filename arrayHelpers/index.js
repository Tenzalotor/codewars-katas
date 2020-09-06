class ArrayHelper {
    constructor(numbers) {
        this.numbers = numbers;
    }

    square() {
        return this.numbers.map(el => Math.pow(el, 2));
    }

    cube() {
        return this.numbers.map(el => Math.pow(el, 3));
    }

    average() {
        return Math.floor(this.numbers.reduce((sum, el) => sum + el)/this.numbers.length);
    }

    sum() {
        return this.numbers.reduce((sum, el) => sum + el);
    }

    even() {
        return this.numbers.filter(el => el % 2 == 0);
    }

    odd() {
        return this.numbers.filter(el => el % 2 != 0);
    }
}

let numbers = new ArrayHelper([1, 2, 3, 4, 5]);

console.log(numbers.odd());

