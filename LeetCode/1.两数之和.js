/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力解法
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === target - nums[i]) {
//         return [i, j];
//       }
//     }
//   }
// };

// // javascript Map 解法
const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    }
    map.set(target - nums[i], i)
  }
  console.log('map', map)
}

// javascript hasMap
// const twoSum = (nums, target) => {
//   const prevNums = {}; // 存放出现过的数字，和对应的索引
//   for (let i = 0; i < nums.length; i += 1) {
//     // 遍历元素
//     const curNum = nums[i]; // 当前元素
//     const targetNum = target - curNum; // 满足题目要求的目标元素
//     const targetNumIndex = prevNums[targetNum]; // 在prevNums中找目标元素的索引
//     if (targetNumIndex !== undefined) {
//       // 如果存在
//       return [targetNumIndex, i]; // 直接返回 [目标元素的索引, 当前索引]
//     }
//     // 如果不存在，说明之前没出现过目标元素
//     prevNums[curNum] = i; // 每次都存入当前元素和对应的索引
//   }
// };
twoSum([2, 7, 11, 15], 9)

// @lc code=end
