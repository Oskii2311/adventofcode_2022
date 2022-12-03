const convertDataToArray = require("../helpers/convertDataToArray");
const readData = require("../helpers/readData");
const sumArray = require("../helpers/sumArray");

const getCommonElement = (a, b) => {
  for (let index = 0; index < a.length; index++) {
    const elementA = a[index];
    for (let j = 0; j < b.length; j++) {
      const elementB = b[j];
      if (elementA === elementB) {
        return elementA;
      }
    }
  }
};

const calculateResult = (elements) => {
  return sumArray(
    elements.map((commonElement) => {
      for (let index = 0; index < alphabet.length; index++) {
        if (alphabet[index] === commonElement) {
          return index + 1;
          break;
        }
        if (alphabet[index].toLocaleUpperCase() === commonElement) {
          return index + 26 + 1;
          break;
        }
      }
    })
  );
};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const getCommonElementInThreeArrays = (a, b, c) => {
  for (let index = 0; index < a.length; index++) {
    const elementA = a[index];
    for (let j = 0; j < b.length; j++) {
      const elementB = b[j];
      if (elementA === elementB) {
        for (let k = 0; k < c.length; k++) {
          const elementC = c[k];
          if (elementB === elementC) {
            return elementA;
          }
        }
      }
    }
  }
};

const getCommonElementsForPart1 = (data) => {
  return data.map((str) => {
    const half = Math.ceil(str.length / 2);

    const firstHalf = str.slice(0, half);
    const secondHalf = str.slice(half);
    return getCommonElement(firstHalf, secondHalf);
  });
};

const getCommonElementsForPart2 = (data) => {
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }

  const commonElements = chunks.map((chunk) => {
    return getCommonElementInThreeArrays(...chunk);
  });

  return commonElements;
};

const init = async () => {
  const data = convertDataToArray(await readData());

  console.log(calculateResult(getCommonElementsForPart1(data)));

  //part 2
  console.log(calculateResult(getCommonElementsForPart2(data)));
};

init();
