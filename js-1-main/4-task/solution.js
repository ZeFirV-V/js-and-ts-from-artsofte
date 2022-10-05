export function unionLog(type, msg){
    if (typeof console[type] !== 'function')
        throw new Error("throw")
    console[type](msg);
}