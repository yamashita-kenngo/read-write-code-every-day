import test from "ava";
import diagonalDifference, {
  outPutRightDiagonalList,
} from "./diagonal-difference";

test("diagonalDifference retun 4 when input [[11, 2, 4],[4, 5, 6],[10, 8, -12],]", (t) => {
  t.is(
    diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ]),
    15
  );
});
