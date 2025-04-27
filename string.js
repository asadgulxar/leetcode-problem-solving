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

// 6. Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const rows = [];
  let rowOp = "+";
  let rowIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (rowOp === "+") {
      rows[rowIndex] = (rows[rowIndex] || "") + s[i];
      rowIndex++;
      if (rowIndex === numRows - 1) rowOp = "-";
      continue;
    }
    if (rowOp === "-") {
      rows[rowIndex] = (rows[rowIndex] || "") + s[i];
      rowIndex--;
      if (rowIndex === 0) rowOp = "+";
    }
  }
  return rows.join("");
};
