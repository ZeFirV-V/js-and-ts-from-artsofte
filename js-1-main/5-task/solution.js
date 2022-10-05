export function range(beginningRange, endRange, arrayStep = 1 ){
    if(!Number.isInteger(beginningRange) || !Number.isInteger(endRange)
        || !Number.isInteger(arrayStep))
        throw new Error('WrongArgumentType');
    if(beginningRange > endRange && arrayStep > 0)
        throw new Error('ArgumentConflict');
    let count = Math.ceil((Math.abs(endRange - beginningRange)+ 1)/Math.abs(arrayStep));
    return Array.from({length : count}, (_, i) => beginningRange + i * arrayStep);
}

export function sum(arrayNumbers){
    if(!Array.isArray(arrayNumbers)
        || arrayNumbers.some(element => !Number.isInteger(element)))
        throw new Error('WrongArgumentType');
    return arrayNumbers.reduce((sum, current) => sum + current, 0);
}