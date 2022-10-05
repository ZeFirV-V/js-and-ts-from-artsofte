import { strict as assert } from "assert";
import { copyObject, isCopy } from "../solution.js";


function publicTest1() {
    const source = 5;
    const copy = copyObject(source);
    return JSON.stringify(source) === JSON.stringify(copy) && isCopy(source, copy);
}

function publicTest2() {
    const source = 'test string';
    const copy = copyObject(source);
    return JSON.stringify(source) === JSON.stringify(copy) && isCopy(source, copy);
}

function publicTest3() {
    const source = (a) => console.log(a);
    const copy = copyObject(source);
    return JSON.stringify(source) === JSON.stringify(copy) && isCopy(source, copy);
}

function publicTest4() {
    const source = {
        a: 'stringExample',
        b: 5,
        c: true,
        d: {
            a: 'stringExample',
            b: 5,
            c: false,
            d: () => console.log('Я вложенная функция'),
        },
        e: (lol, kek) => {
            console.log(lol, kek);
        },
    };
    const copy = copyObject(source);
    return JSON.stringify(source) === JSON.stringify(copy) && isCopy(source, copy);
}

/** Запуск всех тестов с выводом результата */
export function startAllTests() {
    const results = [
        publicTest1(),
        publicTest2(),
        publicTest3(),
        publicTest4()
    ];
    
    const allTestsCount = results.length;
    const mapFunc = (arr) => arr
        .map((result, index) => {
            return {
                result,
                index: index + 1
            }
        });
    const successTests = mapFunc(results)
        .filter((result) => result.result)
        .map((result) => result.index);
    
    const errorTests = mapFunc(results)
        .filter((result) => !result.result)
        .map((result) => result.index);

    console.log(`Test count: ${results.length}`);
    console.log(`Success: ${successTests}`);
    console.log(`Error: ${errorTests}`);
    console.log(`Tests passed: ${allTestsCount === successTests.length}`);
    
    assert.equal(allTestsCount === successTests.length, true);
}
