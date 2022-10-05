type ICreateEmptyObject = () => {
    addField: (fieldName: string, fieldValue: any) => void,
    deleteField: (fieldName: string) => void
}