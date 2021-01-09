import test from "ava";
import staircase from "./staircase";

test("staircase return", (t) => {
  t.is(staircase(5), ["#", "##", "###", "####", "#####"]);
});
