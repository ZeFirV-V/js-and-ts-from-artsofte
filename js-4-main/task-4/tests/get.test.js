import { strict as assert } from "assert";
import { GET, NOT_FOUND, parent } from "../solution";

export const simpleTest = () => {
  const testObj = {
    a: 10,
  };

  assert.equal(GET(testObj, "a"), 10);
};

export const secondTest = () => {
  const testObj = {
    a: 10,
    [parent]: {
      b: 30,
    },
  };
  const first = GET(testObj, "b") === 30;

  const testObj2 = {
    a: 10,
    [parent]: {
      b: 20,
      [parent]: {
        g: 40,
        [parent]: {
          c: 200,
        },
      },
    },
  };
  const second = GET(testObj2, "c") === 200;

  assert.equal(first && second, true);
};

export const thirdTest = () => {
  const testObj = {
    a: 10,
    [parent]: {
      b: 30,
    },
  };

  assert.equal(GET(testObj, "c"), NOT_FOUND);
};

export const fourthTest = () => {
  const fun = () => {};
  const testObj = {
    a: 10,
    [parent]: {
      b: 30,
      fun,
    },
  };

  assert.equal(GET(testObj, "fun"), fun);
};
