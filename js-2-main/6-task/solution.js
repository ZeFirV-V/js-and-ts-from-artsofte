export function copyObject(originalValue){
    if(isPrimitive(originalValue) || originalValue === null){
        if (typeof originalValue === "symbol"){
            return Symbol(originalValue.description)
        }
        return originalValue;
    }

    let type = Object.prototype.toString.call(originalValue).slice(8, -1).toLowerCase()

    switch (type){
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

    function cloneFunction(Value) {
        let copyValue = new Function('return ' + Value.toString())();
        Object.defineProperty(copyValue, 'name', {value: Value.name});
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

    function isPrimitive(value){
        return ((value === null) || (typeof value !== "object" && typeof value !== "function"));
    }
}

export function isCopy(originalValue, copyValue){
    let typeOriginal = Object.prototype.toString.call(originalValue).slice(8, -1).toLowerCase();
    let typeCopy = Object.prototype.toString.call(copyValue).slice(8, -1).toLowerCase();

    if(typeOriginal !== typeCopy) {
        return false;
    }

    if(Number.isNaN(originalValue) && Number.isNaN(copyValue)){
        return true;
    }

    if(typeOriginal === "symbol"){
        return (originalValue.toString() === copyValue.toString() && originalValue.description === copyValue.description)
    }

    if(typeOriginal === "function"){
        return originalValue.name === copyValue.name && originalValue.toString() === copyValue.toString();
    }

    if((typeof originalValue !== "object") || originalValue === null) {
        return originalValue === copyValue;
    }

    if(Object.keys(originalValue).length !== Object.keys(copyValue).length) {
        return false;
    }

    let result = true;
    for(let keyOriginal in originalValue){
        if(keyOriginal in copyValue){
            if(typeOriginal === "object"){
                result = isCopy(originalValue[keyOriginal], copyValue[keyOriginal]);
            }
            else if (typeof originalValue[keyOriginal] !== "object"){
                result = copyValue[keyOriginal] === originalValue[keyOriginal];
            }
            if(!result)
                return false;
        }
        else{
            return false;
        }
    }
    return result;
}
