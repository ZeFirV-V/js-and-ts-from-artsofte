import { strict as assert } from "assert";
import { multiplyPropertyValue } from '../solution.js';

export const miltyplyNumberValue = () => {
    const testObject = {
        a: 5,
        b: 'string',
        c: 10,
        d: 'asd',
        e: {
            a: 5,
            b: 'string',
            c: 10,
            d: 'asd',
            e: {
                a: 5,
                b: 'string',
                c: 10,
                d: 'asd'
            }
        }
    }
    multiplyPropertyValue(testObject, 'number', 5);

    assert.equal(`{"a":25,"b":"string","c":50,"d":"asd","e":{"a":25,"b":"string","c":50,"d":"asd","e":{"a":25,"b":"string","c":50,"d":"asd"}}}`, JSON.stringify(testObject))
}

export const miltyplyStringValue = () => {
    const testObject = {
        a: 5,
        b: 'string',
        c: 10,
        d: 'asd',
        e: {
            a: 5,
            b: 'string',
            c: 10,
            d: 'asd',
            e: {
                a: 5,
                b: 'string',
                c: 10,
                d: 'asd'
            }
        }
    }
    multiplyPropertyValue(testObject, 'string', 3);

    assert.equal(`{"a":5,"b":"stringstringstring","c":10,"d":"asdasdasd","e":{"a":5,"b":"stringstringstring","c":10,"d":"asdasdasd","e":{"a":5,"b":"stringstringstring","c":10,"d":"asdasdasd"}}}`, JSON.stringify(testObject))
}


export const miltyplyBooleanValue = () => {
    const testObject = {
        a: 5,
        b: 'string',
        c: 10,
        d: 'asd',
        e: false
    }
    multiplyPropertyValue(testObject, 'boolean', 3);

    assert.equal(`{"a":5,"b":"string","c":10,"d":"asd","e":true}`, JSON.stringify(testObject));
}