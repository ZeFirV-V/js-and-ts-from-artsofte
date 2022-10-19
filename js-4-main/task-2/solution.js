export class FinalString{
    constructor() {
        if (this.constructor.name !== "FinalString"){
            throw new Error("TryToExtendsFinalClassException")
        }
    }
}