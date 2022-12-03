const convertDataToArray = require("../helpers/convertDataToArray");
const readData = require("../helpers/readData");
const sumArray = require("../helpers/sumArray");

const pointForChar = {
  X: 1,
  Y: 2,
  Z: 3,
};

const pointForBattle = {
  DRAW: 3,
  WIN: 6,
  LOSE: 0,
};

const whatCanIdoTree = {
  X: {
    A: "Z",
    B: "X",
    C: "Y",
  },
  Y: {
    A: "X",
    B: "Y",
    C: "Z",
  },
  Z: {
    A: "Y",
    B: "Z",
    C: "X",
  },
};

const getBattleResult = (enemyChar, myChar) => {
  if (
    (enemyChar === "A" && myChar === "Y") ||
    (enemyChar === "B" && myChar === "Z") ||
    (enemyChar === "C" && myChar === "X")
  ) {
    return pointForBattle["WIN"];
  } else if (
    (enemyChar === "A" && myChar === "X") ||
    (enemyChar === "B" && myChar === "Y") ||
    (enemyChar === "C" && myChar === "Z")
  ) {
    return pointForBattle["DRAW"];
  } else if (
    (enemyChar === "A" && myChar === "Z") ||
    (enemyChar === "B" && myChar === "X") ||
    (enemyChar === "C" && myChar === "Y")
  ) {
    return pointForBattle["LOSE"];
  }
};

const init = async () => {
  const data = convertDataToArray(await readData());
  // part 1
  const result = sumArray(
    data.map((elements) => {
      const [enemy, me] = elements.split(" ");

      return getBattleResult(enemy, me) + pointForChar[me];
    })
  );

  console.log(result);

  //part 2
  const result1 = sumArray(
    data.map((elements) => {
      const [enemy, whatCanIdo] = elements.split(" ");

      const myChar = whatCanIdoTree[whatCanIdo][enemy];

      return getBattleResult(enemy, myChar) + pointForChar[myChar];
    })
  );
  console.log(result1);
};

init();
