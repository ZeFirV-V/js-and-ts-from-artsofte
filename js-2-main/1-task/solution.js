export function createEmptyObject(){
    return{
        addField(fieldName, feildValue)
        {
            if(typeof fieldName !== "string" || fieldName.length === 0 || !fieldName.trim())
                throw new Error('WrongType');
            this[fieldName] = feildValue;
        },

        deleteField(fieldName) {
            if(typeof fieldName !== "string" || fieldName.length === 0 || !fieldName.trim())
                throw new Error('WrongType');
            delete this[fieldName];
        },
    }
}
