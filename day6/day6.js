const readData = require("../helpers/readData");

const getMarkerLastCharacterPosition = (inputArray, markerLength) => {
  let marker = [];

  for (let i = 0; i < inputArray.length; i++) {
    marker.push(inputArray[i]);
    if (marker.length !== markerLength) continue;

    const unique = new Set(marker);

    if (unique.size === marker.length) {
      return i + 1;
    } else {
      marker = [];
      i = i - (markerLength - 1);
    }
  }
};

const init = async () => {
  const stringInput = await readData();
  const inputArray = stringInput.split("");

  // part 1
  console.log(getMarkerLastCharacterPosition(inputArray, 4));

  // part 2
  console.log(getMarkerLastCharacterPosition(inputArray, 14));
};
init();
