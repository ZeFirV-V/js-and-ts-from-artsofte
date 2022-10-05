export function fib(countFibonacciNumbers) {
    if(!Number.isInteger(countFibonacciNumbers))
        throw new Error('WrongType')
    let firstPreviousFibonacciNumber = 1;
    let secondPreviousFibonacciNumber = 1;
    let result = 0;
    for(let i = 1; i <= countFibonacciNumbers; i++) {
        if(i === 1 || i === 2)
            result = 1;
        else {
            result = firstPreviousFibonacciNumber + secondPreviousFibonacciNumber;
            firstPreviousFibonacciNumber = secondPreviousFibonacciNumber;
            secondPreviousFibonacciNumber = result;
        }
    }
    return (result.toString())
}