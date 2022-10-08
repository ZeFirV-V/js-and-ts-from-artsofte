export function copyObject(originalValue){
    let typeValue = Array.isArray(originalValue) ? "array" : typeof originalValue;

    if(originalValue === null || typeValue !== "object" && typeValue !== "function"){
        if (typeValue === "symbol"){
            return Symbol(originalValue.description)
        }
        return originalValue;
    }

    switch (typeValue){
        case "object":
            return cloneObject();
        case "array":
            return cloneArray(originalValue);
        case "function":
            return cloneFunction(originalValue);
    }

    function getValue(copyValue) {
        for (let key in originalValue) {
            copyValue[key] = copyObject(originalValue[key]);
        }
    }

    function cloneFunction(value) {
        let copyValue = new Function('return ' + value.toString())();
        Object.defineProperty(copyValue, 'name', {value: value.name});
        getValue(copyValue)
        return copyValue;
    }

    function cloneObject() {
        let copyValue = {};
        getValue(copyValue);
        return copyValue;
    }

    function cloneArray(value) {
        return value.map((item) => copyObject(item));
    }
}

export function isCopy(originalValue, copyValue){
    let typeOriginal = typeof originalValue;
    let typeCopy = typeof originalValue;

    if(typeOriginal !== typeCopy) {
        return false;
    }

    if(Number.isNaN(originalValue) && Number.isNaN(copyValue)){
        return true;
    }

    if(typeOriginal === "symbol"){
        return (originalValue.toString() === copyValue.toString()
            && originalValue.description === copyValue.description)
    }

    if(typeOriginal === "function"){
        return originalValue.name === copyValue.name
            && originalValue.toString() === copyValue.toString();
    }

    if(typeOriginal !== "object" || originalValue === null) {
        return originalValue === copyValue;
    }

    if(Object.keys(originalValue).length !== Object.keys(copyValue).length) {
        return false;
    }

    let result = true;
    for(let keyOriginal in originalValue){
        if(keyOriginal in copyValue){
            result = isCopy(originalValue[keyOriginal], copyValue[keyOriginal]);
            if(!result) {
                return false;
            }
        }
        else{
            return false;
        }
    }
    return result;
}