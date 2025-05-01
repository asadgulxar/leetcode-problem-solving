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

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

function myAtoi(s) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  let i = 0;
  const n = s.length;
  let sign = 1;
  let result = 0;

  while (i < n && s[i] === " ") {
    i++;
  }

  if (i < n && (s[i] === "-" || s[i] === "+")) {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  while (i < n && s[i] >= "0" && s[i] <= "9") {
    const digit = s[i].charCodeAt(0) - "0".charCodeAt(0);

    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return result * sign;
}
