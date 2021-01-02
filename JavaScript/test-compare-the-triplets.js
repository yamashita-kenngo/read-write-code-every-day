import test from "ava";
import compareTheTriplets from "./compare-the-triplets.js";

test("compareTheTriplets", (t) => {
  t.deepEqual(compareTheTriplets([1, 2, 3], [3, 2, 1]), [1, 1]);
});

// Alice [1, 2, 3]
// Bob [3, 2, 1]
// AliceとBobの配列を比較する
// 比較の結果大きい数字を持つ方に１点を付ける
// 出力はAlice, Bobの順で配列
