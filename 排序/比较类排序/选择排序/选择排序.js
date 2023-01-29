/**
 * 选择排序
 * 平均时间复杂度 ： O(n^2)
 * 最好时间复杂度 ： O(n^2)
 * 最坏时间复杂度 ： O(n^2)
 * 空间复杂度 ： O(1)
 * 稳定性： 不稳定
 */
let arr = [25, 67, 87, 989, 234, 1, 5, 0, 90];
let selectSort = (args) => {
  const len = args.length;
  let index;
  // 循环找到数组中最小的元素，并移动到当前位置
  for (let i = 0; i < len - 1; i++) {
    index = i;
    for (let j = i + 1; j < len; j++) {
      if (args[index] > args[j]) index = j;
    }
    if (index != i) {
      let temp = args[i];
      args[i] = args[index];
      args[index] = temp;
    }
  }
  return args;
};
console.log(selectSort(arr));
