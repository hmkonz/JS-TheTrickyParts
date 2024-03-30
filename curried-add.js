// When 'innerAdd()' is returned and gets passed a number argument (nextNum), 'nextNum' is added to the total and the 'innerAdd' function is returned. The innerAdd function will be called as many times as 'nextNum' is a number. If innerAdd() is returned without a number argument (nextNum is not provided), total is returned.

function curriedAdd(total) {
  // when execute curriedAdd() function, check to see if an argument 'total' is passed in. If there is no argument (typeof total !== "number"), return 0.
  if (typeof total !== "number") return 0;

  // for instances of curriedAdd() with or without arguments passed in, initialize 'total' to 'total' passed in or initialize 'total' to 0. (i.e. for "let firstAdder = curriedAdd()", total=0. For "let firstAdder = curriedAdd(10)", total=10.)
  total = total || 0;

  return function innerAdd(nextNum) {
    // If a number argument (nextNum) is provided (i.e firstAdder(1)(2)(3)), add the first 'nextNum' to 'total' and return the 'innerAdd' function which calls it again for the next 'nextNum', etc. The innerAdd function will be called as many times as 'nextNum' is a number
    if (typeof nextNum === "number") {
      // continue adding 'nextNum' to 'total' and calling 'innerAdd' function until there are no more number arguments
      total += nextNum;
      return innerAdd;
    } // otherwise, if a number argument is not provided, return 'total'
    else {
      return total;
    }
  };
}

let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

module.exports = { curriedAdd };
