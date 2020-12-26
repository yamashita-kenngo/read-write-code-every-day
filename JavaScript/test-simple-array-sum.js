import test from "ava";
import simpleArraySum from "./simple-array-sum";

test("simpleArraySum returns 55 when input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", (t) => {
  t.is(simpleArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55);
});
