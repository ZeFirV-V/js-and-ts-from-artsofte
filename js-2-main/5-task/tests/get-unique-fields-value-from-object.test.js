import { strict as assert } from "assert";
import { getUniqueFieldsValueFromObject } from '../solution.js';

export const publicTest = () => {
    const testObject = {
        a: 5,
        b: 'b',
        c: {
            a: 5,
            b: 'b',
            c: {
                b: 'c'
            },
            d: {
                a: 6,
                b: [
                    {
                        a: 7,
                        b: 'g'
                    },
                    {
                        a: 8,
                        b: [
                            {
                                a: 8,
                                b: 'end'
                            }
                        ]
                    }
                ]
            }
        }
    }
    const result = getUniqueFieldsValueFromObject(testObject, 'a');

    assert.equal(`[5,6,7,8]`, JSON.stringify(result))
}

export const publicTestTwo = () => {
    const testObject = {
        a: 6,
        b: 'b',
        c: {
            a: 8,
            b: 'b',
            c: {
                b: 'c'
            },
            d: {
                a: 7,
                b: [
                    {
                        a: 5,
                        b: 'g'
                    },
                    {
                        a: 785648,
                        b: [
                            {
                                a: 8,
                                b: 'end'
                            }
                        ],
                        c: {
                            a: 10
                        }
                    }
                ]
            }
        }
    }
    const result = getUniqueFieldsValueFromObject(testObject, 'b');

    assert.equal(`["b","c",[{"a":5,"b":"g"},{"a":785648,"b":[{"a":8,"b":"end"}],"c":{"a":10}}],"g",[{"a":8,"b":"end"}],"end"]`, JSON.stringify(result))
}
