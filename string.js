// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0 || !s.length) return false;
  const pairs = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const stack = [];
  for (let i = 0; i < s.length; i = i + 1) {
    if (pairs.get(s[i])) {
      stack.push(s[i]);
    } else {
      if (!stack.length) false;
      if (pairs.get(stack.pop()) !== s[i]) return false;
    }
  }
  return !stack.length;
};
