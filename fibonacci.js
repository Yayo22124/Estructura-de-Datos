function fibonacci(n) {
    if (n <= 0) {
        // console.log(n);
        // console.log(n);
        return 0;
    }
    if (n === 1) {
        // console.log(n);
        // console.log(n);
        return 1;
    }
    return (fibonacci(n - 1) + fibonacci(n - 2));
}
console.log(fibonacci(5));
// fibonacci(8)
