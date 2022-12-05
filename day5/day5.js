const convertDataToArray = require("../helpers/convertDataToArray");
const readData = require("../helpers/readData");

const defaultStacks = [
  ["G", "D", "V", "Z", "J", "S", "B"],
  ["Z", "S", "M", "G", "V", "P"],
  ["C", "L", "B", "S", "W", "T", "Q", "F"],
  ["H", "J", "G", "W", "M", "R", "V", "Q"],
  ["C", "L", "S", "N", "F", "M", "D"],
  ["R", "G", "C", "D"],
  ["H", "G", "T", "R", "J", "D", "S", "Q"],
  ["P", "F", "V"],
  ["D", "R", "S", "T", "J"],
];

const init = async () => {
  const data = convertDataToArray(await readData());
  const stacksPart1 = copyArray(defaultStacks);
  data.forEach((tip) => {
    const [amount, source, target] = tip
      .match(/[-+]?[0-9]*\.?[0-9]+/g)
      .map(Number);
    let counter = amount;

    const sourceStackIndex = source - 1;
    const targetStackIndex = target - 1;

    while (counter) {
      const element = stacksPart1[sourceStackIndex].pop();
      stacksPart1[targetStackIndex].push(element);
      counter--;
    }
  });
  let resultPart1 = getStrFromLastElementsOfArrOfArr(stacksPart1);

  //part 2
  const stacksPart2 = copyArray(defaultStacks);

  data.forEach((tip, idx) => {
    const [amount, source, target] = tip
      .match(/[-+]?[0-9]*\.?[0-9]+/g)
      .map(Number);

    const sourceStackIndex = source - 1;
    const targetStackIndex = target - 1;
    const sourceStack = stacksPart2[sourceStackIndex];
    const targetStack = stacksPart2[targetStackIndex];
    const elementsToMove = sourceStack.splice(sourceStack.length - amount);
    targetStack.push(...elementsToMove);
  });
  const resultPart2 = getStrFromLastElementsOfArrOfArr(stacksPart2);

  console.log(resultPart1, resultPart2);
};
init();

const copyArray = (arr) => arr.map((el) => el.map((el) => el));

const getStrFromLastElementsOfArrOfArr = (arrOfArr) => {
  return arrOfArr.map((el) => el[el.length - 1]).join("");
};
