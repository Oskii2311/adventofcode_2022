const checkIfOneSectionIdsContainsOther = require("./checkIfOneSectionIdsContainsOther");

describe("checkIfOneSectionIdsContainsOther", () => {
  [
    {
      input: { sectionA: [1, 5], sectionB: [2, 4] },
      expectedResult: true,
    },
    {
      input: { sectionA: [2, 4], sectionB: [1, 5] },
      expectedResult: true,
    },
    {
      input: { sectionA: [1, 5], sectionB: [1, 5] },
      expectedResult: true,
    },
    {
      input: { sectionA: [2, 6], sectionB: [1, 5] },
      expectedResult: false,
    },
  ].forEach(({ input, expectedResult }) => {
    it(`should return ${expectedResult} if input is ${JSON.stringify(
      input
    )}`, () => {
      const result = checkIfOneSectionIdsContainsOther(
        input.sectionA,
        input.sectionB
      );

      expect(result).toBe(expectedResult);
    });
  });
});
