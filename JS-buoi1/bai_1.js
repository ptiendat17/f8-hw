// Bài 1
function isPrime(n) {
    if (n <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let number = 17;
if (isPrime(number)) {
    console.log(number + " là số nguyên tố.");
} else {
    console.log(number + " không phải là số nguyên tố.");
}

//Bài 2
function isPerfectSquare(n) {
    if (n < 0) return false;
    let sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}

let number1 = 16;
if (isPerfectSquare(number)) {
    console.log(number + " là số chính phương.");
} else {
    console.log(number + " không phải là số chính phương.");
}

//Bài 3

function isPerfectNumber(n) {
    if (n <= 1) return false;
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== 1 && i !== n / i) {
                sum += n / i; 
        }
    }
    return sum === n; 
}
let number = 28; 
if (isPerfectNumber(number)) {
    console.log(number + " là số hoàn hảo.");
} else {
    console.log(number + " không phải là số hoàn hảo.");
}
