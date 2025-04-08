// You are given an n x n 2D matrix representing an image,
//  rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place,
// which means you have to modify the input 2D matrix directly.
//  DO NOT allocate another 2D matrix and do the rotation.

//  link: https://leetcode.com/problems/rotate-image/description/?envType=study-plan-v2&envId=top-interview-150

var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};

// Given an m x n matrix, return all elements of the matrix in spiral order.

// https://leetcode.com/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  const result = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};
