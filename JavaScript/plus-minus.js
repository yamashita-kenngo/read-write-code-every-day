export default function plusMinus(inputList) {
  const denominator = inputList.length;
  let plusNum = 0;
  let minusNum = 0;
  let zeroNum = 0;
  inputList.forEach((element) => {
    if (Math.sign(element) === 0) {
      zeroNum++;
    }
    if (Math.sign(element) === 1) {
      plusNum++;
    }
    if (Math.sign(element) === -1) {
      minusNum++;
    }
  });

  return [
    Number((plusNum / denominator).toPrecision(6)),
    Number((minusNum / denominator).toPrecision(6)),
    Number((zeroNum / denominator).toPrecision(6)),
  ];
}
