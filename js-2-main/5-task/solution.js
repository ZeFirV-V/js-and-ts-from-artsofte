export function getUniqueFieldsValueFromObject(object, fieldName){
    let result = [];

    if (fieldName in object){
        result.push(object[fieldName]);
    }

    for (let key of Object.keys(object)){
        if(typeof object[key]  === "object"){
            let resultsFromInternalObjects =  getUniqueFieldsValueFromObject(object[key], fieldName);
            for (let index = 0; index < resultsFromInternalObjects.length; index++) {
                result.push(resultsFromInternalObjects[index])
            }
        }
    }

    return result.filter((item, index) => result.indexOf(item) === index)
        .sort((first, second) => first - second);
}