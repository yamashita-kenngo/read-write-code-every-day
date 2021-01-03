import test from "ava";
import plusMinus from "./plus-minus";

test("plusMinus", (t) => {
  t.is(plusMinus([-4, 3, -9, 0, 4, 1]), [0.5, 0.333333, 0.166667]);
});
