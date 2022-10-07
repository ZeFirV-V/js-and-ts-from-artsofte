export function multiplyPropertyValue(object, fieldType, multiplicationAmount){
    if (multiplicationAmount <= 0)
        throw new Error('WrongType');
    for (let objectProperty in object) {
        if (typeof object[objectProperty] !== fieldType && typeof object[objectProperty] !== "object")
            continue;
        switch (typeof object[objectProperty]) {
            case "string":
                object[objectProperty] = object[objectProperty].repeat(multiplicationAmount);
                break;
            case "number":
                object[objectProperty] = object[objectProperty] * multiplicationAmount;
                break;
            case "boolean":
                object[objectProperty] = !object[objectProperty];
                break;
            case "object":
                multiplyPropertyValue(object[objectProperty], fieldType, multiplicationAmount);
                break;
            default:
                throw new Error('WrongType');
        }
    }
}

