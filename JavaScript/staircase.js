export default function staircase(inputNum) {
  const resultList = Array(inputNum).fill("");
  let i = 0;
  while (i < inputNum) {
    const spaceChar = " ".repeat(inputNum - 1 - i);
    const sharpChar = "#".repeat(1 + i);
    resultList[i] = spaceChar + sharpChar;
    i++;
  }
  return resultList;
}
