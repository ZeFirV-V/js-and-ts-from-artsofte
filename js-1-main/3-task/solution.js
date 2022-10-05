export function palindrome(inputString) {
    if(arguments.length !== 1)
        throw new Error('InvalidArgumentCount');
    if(typeof inputString !== "string")
        throw new Error('WrongType');
    let workingString = inputString.trim();
    let length = workingString.length;
    let isPalindrome = length > 1;
    for(let i = 0; i < Math.floor(length / 2); i++){
        if(workingString[i] !== workingString[length - 1 - i])
            isPalindrome = false;
    }
    return isPalindrome;
}