export default function compareTheTriplate(firstList, secondList) {
  let firstResult = 0;
  let secondResult = 0;
  let resultArray = [];
  firstList.forEach((element, index) => {
    if (element !== secondList[index]) {
      element > secondList[index] ? firstResult++ : secondResult++;
    }
  });
  resultArray[0] = firstResult;
  resultArray[1] = secondResult;
  return resultArray;
}
