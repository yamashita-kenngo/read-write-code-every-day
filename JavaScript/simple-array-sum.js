export default function simpleArraySum(inputList) {
  return inputList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
