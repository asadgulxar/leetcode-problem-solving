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
