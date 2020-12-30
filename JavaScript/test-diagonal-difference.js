import test from "ava";
import diagonalDifference from "./diagonal-difference";

test("diagnoalDifference return 2 when input [1, 5, 9] and [3, 5, 9]", (t) => {
  t.is(
    diagonalDifference([
      [1, 5, 9],
      [3, 5, 9],
    ]),
    2
  );
});

test("diagonalDifference retun 4 when input [[11, 2, 4],[4, 5, 6],[10, 8, -12],]", (t) => {
  t.is(
    diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ]),
    4
  );
});
