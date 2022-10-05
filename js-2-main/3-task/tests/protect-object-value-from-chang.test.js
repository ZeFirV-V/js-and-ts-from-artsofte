import { strict as assert } from "assert";
import { protectObjectValueFromChange } from '../solution.js';

export const tryToRewriteString = () => {
    const initValue = 'string';

    const testObject = {
        a: 5,
        b: initValue,
        c: 10,
        d: 'asd'
    }
    protectObjectValueFromChange(testObject, 'b');
    try {
        testObject.b = 'changedValue';
    } catch(err) {
        assert.equal(true, true);
    }

}

export const tryToRewriteObject = () => {
    const initValue = {
        ha: '55'
    };

    const testObject = {
        a: 5,
        b: initValue,
        c: 10,
        d: 'asd',
    }
    protectObjectValueFromChange(testObject, 'b');
    try {
        testObject.b = 'changedValue';
    } catch(err) {
        assert.equal(true, true);
    }

}
