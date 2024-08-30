function generatePrimes(limit) {
    const sieve = Array(limit + 1).fill(true); // Create a boolean array
    console.log(sieve)
    sieve[0] = sieve[1] = false; // 0 and 1 are not primes

    for (let i = 2; i * i <= limit; i++) {
        console.log(`i====== ${i} is ${i*i}`)
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                console.log(`j====== ${j}, i====== ${i}, J=J+i== ${j+i}`)
                sieve[j] = false; // Mark multiples of i as not prime
            }
        }
    }

    // Extract the prime numbers from the sieve
    const primes = [];
    console.log(sieve)
    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) primes.push(i);
    }

    return primes;
}

// Example Usage
console.log(generatePrimes(50)); 