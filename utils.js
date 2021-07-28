const { BadRequestError } = require("./expressError");

/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  try {
    nums = strNums.map((strNum) => Number(strNum));
  } catch {
    throw new BadRequestError();
  }
  return nums;

  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
}

module.exports = { convertStrNums };
