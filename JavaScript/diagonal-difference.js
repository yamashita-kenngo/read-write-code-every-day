export default function diagonalDifference(inputList) {
  const metrixRange = inputList.length;
  const inputListRightDiagonal = outPutRightDiagonalList(
    inputList,
    metrixRange
  );
  const inputListLeftDiagonal = outPutLeftDiagonalList(inputList, metrixRange);
  const sumOfRightDiagonal = inputListRightDiagonal.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const sumOfLeftDiagonal = inputListLeftDiagonal.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return Math.abs(sumOfLeftDiagonal - sumOfRightDiagonal);
}

export function outPutRightDiagonalList(inputList, metrixRange) {
  let i = 0;
  let outputList = [];
  while (i < metrixRange) {
    const output = inputList[i][i];
    outputList.push(output);
    i++;
  }
  return outputList;
}
export function outPutLeftDiagonalList(inputList, metrixRange) {
  let i = 0;
  let outputList = [];
  let x = metrixRange;
  while (i < metrixRange) {
    x = metrixRange - i - 1;
    const output = inputList[i][x];
    outputList.push(output);
    i++;
    console.log(i, x);
  }
  return outputList;
}
