/**
 * 归并排序
 * 平均时间复杂度 ： O(nlogn)
 * 最好时间复杂度 ： O(nlogn)
 * 最坏时间复杂度 ： O(nlogn)
 * 空间复杂度 ： O(n)
 * 稳定性： 稳定
 */
let arr = [25, 67, 87, 989, 234, 1, 5, 0, 90];
// 归并
let merge = (left, right) => {
  let arrTemp = [];
  while (left.length && right.length) {
    left[0] > right[0]
      ? arrTemp.push(right.shift())
      : arrTemp.push(left.shift());
  }
  return arrTemp.concat(left, right);
};
// 分治
let mergeSort = (args) => {
  const len = args.length;
  if (len < 2) return args;
  const half = parseInt(len / 2);
  const left = args.splice(0, half);
  const right = args;
  return merge(mergeSort(left), mergeSort(right));
};
console.log(mergeSort(arr));
