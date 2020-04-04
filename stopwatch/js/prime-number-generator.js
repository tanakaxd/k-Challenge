function prime_number_generator(num) {

    let primes = [];

    for (let i = 2; i < 10000; i++) {
        let prime = true;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            primes.push(i);
        }


    }

    return primes.length;

}


console.log(prime_number_generator(1000));







function addfive(num) {
    num = num + 5;
}

function addfive_array(array) {
    array[0] = array[0] + 5;
}

// for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] + 5;
// }

let a = 3;
addfive(a);
console.log(a);

let b = [3];
addfive_array(b);
console.log(b);