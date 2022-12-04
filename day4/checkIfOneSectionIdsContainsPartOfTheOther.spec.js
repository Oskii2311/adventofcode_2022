const checkIfOneSectionIdsContainsPartOfTheOther = require("./checkIfOneSectionIdsContainsPartOfTheOther");

describe("checkIfOneSectionIdsContainsPartOfTheOther", () => {
  [
    {
      input: { sectionA: [1, 5], sectionB: [5, 10] },
      expectedResult: true,
    },
    {
      input: { sectionA: [1, 5], sectionB: [6, 10] },
      expectedResult: false,
    },
    {
      input: { sectionA: [5, 10], sectionB: [1, 5] },
      expectedResult: true,
    },
    {
      input: { sectionA: [6, 10], sectionB: [1, 5] },
      expectedResult: false,
    },
  ].forEach(({ input, expectedResult }) => {
    it(`should return ${expectedResult} if input is ${JSON.stringify(
      input
    )}`, () => {
      const result = checkIfOneSectionIdsContainsPartOfTheOther(
        input.sectionA,
        input.sectionB
      );

      expect(result).toBe(expectedResult);
    });
  });
});
