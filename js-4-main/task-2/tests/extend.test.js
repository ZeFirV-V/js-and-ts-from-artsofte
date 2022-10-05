import { strict as assert } from "assert";
import { FinalString } from "../solution.js";

export const simpleTest = () => {
    class Sub extends FinalString {}

    try {
        const x = new Sub();
    } catch (e) {
        if (e.message === 'TryToExtendsFinalClassException') {
            assert(true, true);
            return
        }
        assert(true, false)
    }
}