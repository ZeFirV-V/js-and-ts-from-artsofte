import { strict as assert } from "assert";
import { lock } from "../solution.js";

function publicTest1() {
  const obj = {
    a: {
      b: 2,
      c: true,
    },
    d: "hello",
  };
  const oldObj = JSON.stringify(obj);

  lock(obj, ["a.b", "d"]);

  try {
    obj.a.b = 10;
  } catch (e) {}

  try {
    obj.d = "changeMe";
  } catch (e) {}

  return oldObj === JSON.stringify(obj);
}

function publicTest2() {
  const obj = {
    a: {
      b: 2,
      c: true,
      d: {
        e: {
          f: true,
        },
      },
    },
    d: "hello",
  };
  const oldObj = JSON.stringify(obj);

  lock(obj, ["a.d.e.f"]);

  try {
    obj.a.d.e.f = false;
  } catch (e) {}

  return oldObj === JSON.stringify(obj);
}

/** Запуск всех тестов с выводом результата */
export function startAllTests() {
  const results = [publicTest1(), publicTest2()];

  const allTestsCount = results.length;
  const mapFunc = (arr) =>
    arr.map((result, index) => {
      return {
        result,
        index: index + 1,
      };
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
