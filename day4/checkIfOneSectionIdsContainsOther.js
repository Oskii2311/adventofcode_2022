const checkIfOneSectionIdsContainsOther = (
  [sectionABegin, sectionAEnd],
  [sectionBBegin, sectionBEnd]
) => {
  if (
    (sectionBBegin >= sectionABegin && sectionBEnd <= sectionAEnd) ||
    (sectionABegin >= sectionBBegin && sectionAEnd <= sectionBEnd)
  ) {
    return true;
  }
  return false;
};

module.exports = checkIfOneSectionIdsContainsOther;
