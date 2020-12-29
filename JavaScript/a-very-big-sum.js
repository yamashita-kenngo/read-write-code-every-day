export default function aVeryBigSum(inputList) {
  return inputList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
