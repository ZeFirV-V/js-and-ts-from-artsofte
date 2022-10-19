export const NOT_FOUND = "NOT_FOUND";

export const parent = {}

export const GET = function getValue(object, key){
    let keys = Object.keys(object);
    if (!keys.includes(key)) {
        if (object[parent] === null || object[parent] === undefined) {
            return NOT_FOUND;
        }
        return getValue(object[parent], key);
    }
    else {
        return object[key];
    }
};