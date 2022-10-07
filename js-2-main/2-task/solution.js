export function multiplyPropertyValue(object, fieldType, multiplicationAmount){
    for (let objectProperty in object) {
        if (typeof object[objectProperty] === fieldType){
            if (typeof object[objectProperty] === "string") {
                object[objectProperty] = object[objectProperty].repeat(multiplicationAmount);
            }
            if (typeof object[objectProperty] === "number") {
                object[objectProperty] =  object[objectProperty] * multiplicationAmount;
            }
        }
    }
}
