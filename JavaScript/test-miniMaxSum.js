import test from "ava";
import miniMaxSum from "./miniMaxSum";

test("miniMaxSum", (t) => {
  t.is(miniMaxSum([1, 2, 3, 4, 5]), [10, 14]);
});
