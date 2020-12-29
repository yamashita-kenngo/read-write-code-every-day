import test from "ava";
import aVeryBigSum from "./a-very-big-sum";

test("aVeryBigSum return 5000000015 when input [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]", (t) => {
  t.is(
    aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]),
    5000000015
  );
});
