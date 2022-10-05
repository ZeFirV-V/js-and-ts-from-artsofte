import { strict as assert } from "assert";
import { aggregate } from "../solution.js";

const testObject = aggregate;

export const simpleTest = () => {
    assert.equal(testObject.gamma === 9 && testObject.lambda === 'lambda' && testObject.figma === 'site', true);
}