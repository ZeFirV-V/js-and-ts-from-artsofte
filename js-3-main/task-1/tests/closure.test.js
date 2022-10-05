import { strict as assert } from "assert";
import { sum } from "../solution.js";

export const check = () => {
  const check1 = sum(2)(2).result() === 4;
  const check2 = sum(2)(18).result() === 20;
  const check3 = sum(2).result() === 2;
  const check4 = sum(1)(2)(3)(4)(5).result() === 15;

  assert.equal(check1 && check2 && check3 && check4, true);
};
