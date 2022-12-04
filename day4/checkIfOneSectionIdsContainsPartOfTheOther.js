const checkIfOneSectionIdsContainsPartOfTheOther = (
  [sectionABegin, sectionAEnd],
  [sectionBBegin, sectionBEnd]
) => {
  if (sectionBBegin <= sectionAEnd && sectionBEnd >= sectionABegin) {
    return true;
  }
  return false;
};

module.exports = checkIfOneSectionIdsContainsPartOfTheOther;
