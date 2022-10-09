export function sum(a) {
    if (Number.isNaN(a) || !Number.isInteger(a) || !Number.isFinite(a)){
        throw new Error("IllegalArgumentException")
    }
    let currentSum = a;

    function f(b) {
        if (Number.isNaN(b) || !Number.isInteger(b) || !Number.isFinite(b)){
            throw new Error("IllegalArgumentException")
        }
        currentSum += b;
        return f;
    }

    f.result = function() {
        return currentSum;
    };

    return f;
}