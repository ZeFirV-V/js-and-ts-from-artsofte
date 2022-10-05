export function add(numberOne, numberTwo) {
    if(!Number.isInteger(numberOne) || !Number.isInteger(numberTwo))
        throw new Error('WrongType');
    return numberOne + numberTwo;
}