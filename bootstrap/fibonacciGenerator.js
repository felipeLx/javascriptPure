function fibonacciGenerator(n) {
    var fib = [0,1];
    if(n === 1) {
        return [0];
    }
    for(var i=fib.length; i<n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
}