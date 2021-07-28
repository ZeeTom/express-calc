const { BadRequestError } = require("./expressError");

/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  let nums;
  nums = strNums.map((strNum) => +strNum);
  
  if (nums.includes(NaN)) throw new BadRequestError();
 
  return nums;

  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
}

module.exports = { convertStrNums };
