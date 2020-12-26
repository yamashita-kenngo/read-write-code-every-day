// テストライブラリをインポートする
import test from "ava";
// テスト対象をインポートする
import soleveMeFirst from "./solve-me-first";

test("solveMeFirst returns 10 when input 3, and 7", (t) => {
  t.is(soleveMeFirst(3, 7), 10);
});
