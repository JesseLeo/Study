/**
 * 快速排序
 * 平均时间复杂度 ： O(n*logn)
 * 最好时间复杂度 ： O(n*logn)
 * 最坏时间复杂度 ： O(n^2)
 * 空间复杂度 ： O(n*logn)
 * 稳定性： 不稳定
 */
let arr = [25, 67, 87, 989, 234, 1, 5, 0, 90];
let quickSort = (args) => {
  // 考虑只剩一个元素的情况
  if (args.length <= 1) return args;
  const len = args.length;
  let arr1 = [],
    arr2 = [];
  // 和第一个元素比较， 分为两个大于｜小于的数组
  for (let i = 1; i < len; i++) {
    args[i] < args[0] ? arr1.push(args[i]) : arr2.push(args[i]);
  }
  // 递归左右两个数组
  arr1 = quickSort(arr1);
  arr2 = quickSort(arr2);
  // 将哨兵元素推入小数组的最后
  arr1.push(args[0]);
  return arr1.concat(arr2);
};
console.log(quickSort(arr));
