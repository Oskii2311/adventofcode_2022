const fs = require("fs/promises");

async function readData() {
  try {
    return await fs.readFile("./input.txt", { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
}

module.exports = readData;
