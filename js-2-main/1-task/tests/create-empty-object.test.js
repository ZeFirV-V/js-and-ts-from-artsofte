import { strict as assert } from "assert";
import { createEmptyObject } from "../solution.js";

const testObject = createEmptyObject();

export const simpleAddFieldTest = () => {
    const a = 'testString';
    const b = { aaa: 'bbb', ccc: 'ccc' };
    const c = () => console.log('TestConsoleLog');

    testObject.addField('a', a);
    testObject.addField('b', b);
    testObject.addField('c', c);

    const isCorrectAField = !!(testObject.hasOwnProperty('a') && testObject.a === a);
    const isCorrectBField = !!(testObject.hasOwnProperty('b') && testObject.b === b);
    const isCorrectCField = !!(testObject.hasOwnProperty('c') && testObject.c === c);
    const isHaveCorrectFieldLenght = Object.keys(testObject).length === 5;    

    assert.equal(isCorrectAField && isCorrectBField && isCorrectCField && isHaveCorrectFieldLenght, true);
}

export const simpleDeleteFieldTest = () => {
    const a = 'testString';
    const b = { aaa: 'bbb', ccc: 'ccc' };
    const c = () => console.log('TestConsoleLog');

    testObject.addField('a', a);
    testObject.addField('b', b);
    testObject.addField('c', c);

    testObject.deleteField('a');
    testObject.deleteField('c');
    const isHaveCorrectFieldLenght = Object.keys(testObject).length === 3;  

    assert.equal(isHaveCorrectFieldLenght, true);
}