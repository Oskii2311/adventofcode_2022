const readData = require("../helpers/readData");

const convertDataToArray = (data) =>
  data.split("\n\n").map((el) => el.split("\n"));

const init = async () => {
  const data = await readData();

  const dataAsArray = convertDataToArray(data);

  const result = dataAsArray.map((el) =>
    parseInt(el.reduce((a, b) => parseInt(a) + parseInt(b)))
  );

  const answer1 = Math.max(...result);

  // part 2

  result.sort(function (a, b) {
    return a - b;
  });

  const answer2 =
    result[result.length - 1] +
    result[result.length - 2] +
    result[result.length - 3];

  console.log(answer1, answer2);
};

init();
