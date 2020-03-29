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