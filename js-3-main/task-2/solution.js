export function lock(sourceObj, keys){
    if (typeof sourceObj !== 'object' || sourceObj === null){
        throw new Error('Uncorrect source object')
    }

    if (typeof keys === 'undefined' || keys.length === 0 || !keys.every(i => typeof i === "string")){
        throw new Error('Wrong keys argument')
    }

    for (let key of keys) {
        if (key.indexOf('.') === -1 && Object.keys(sourceObj).indexOf(key) <= -1) {
            throw new Error('NoneKeyError')
        }
    }

    for (let key of keys){
        if (key.indexOf('.') > -1 && typeof sourceObj[key.split(".")[0]] === "object"){
            lock(sourceObj[key.split(".")[0]], [key.substring(key.indexOf('.') + 1)])
        }
        else{
            Object.defineProperty(sourceObj, [key], {
                writable: false,
                configurable: false
            })
        }
    }
}