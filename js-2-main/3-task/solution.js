export function protectObjectValueFromChange(objectName, fieldName) {
    Object.defineProperty(objectName, [fieldName], {
        writable: false,
        configurable: false
    })
}
