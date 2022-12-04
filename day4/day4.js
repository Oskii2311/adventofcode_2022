const convertDataToArray = require("../helpers/convertDataToArray");
const readData = require("../helpers/readData");
const checkIfOneSectionIdsContainsOther = require("./checkIfOneSectionIdsContainsOther");
const checkIfOneSectionIdsContainsPartOfTheOther = require("./checkIfOneSectionIdsContainsPartOfTheOther");

const init = async () => {
  const data = convertDataToArray(await readData());
  let firstPartResult = 0;
  let secondPartResult = 0;

  data.forEach((d) => {
    const [firstElfPart, secondElfPart] = d.split(",");
    const sectionA = firstElfPart.split("-").map(Number);
    const sectionB = secondElfPart.split("-").map(Number);

    if (checkIfOneSectionIdsContainsOther(sectionA, sectionB)) {
      firstPartResult += 1;
    }
    if (checkIfOneSectionIdsContainsPartOfTheOther(sectionA, sectionB)) {
      secondPartResult += 1;
    }
  });

  console.log(firstPartResult, secondPartResult);
};

init();
