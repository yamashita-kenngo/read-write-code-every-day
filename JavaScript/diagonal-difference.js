export default function diagonalDifference(inputList) {
  // TODO inputListからinputList1とinputList2を生成する
  // DONE メトリックスの縦横の個数を確定する
  // TODO left-to-right-diagonalの配列を確定する
  // TODO right-to-left-diagonalの配列を確定する
  const metrixRange = inputList.length;
  const inputListRightDiagonal = [
    inputList[0][0],
    inputList[1][1],
    inputList[2][2],
  ];
  const inputListLeftDiagonal = [
    inputList[0][2],
    inputList[1][1],
    inputList[2][0],
  ];
  const sumOfRightDiagonal = inputListRightDiagonal.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const sumOfLeftDiagonal = inputListLeftDiagonal.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return Math.abs(sumOfLeftDiagonal - sumOfRightDiagonal);
}
