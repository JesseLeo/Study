/**
 * 冒泡排序
 * 平均时间复杂度 ： O(n^2)
 * 最好时间复杂度 ： O(n)
 * 最坏时间复杂度 ： O(n^2)
 * 空间复杂度 ： O(1)
 * 稳定性： 稳定
 */
let arr = [25, 67, 87, 989, 234, 1, 5, 0, 90];
let bubbleSort = (args) => {
  const len = args.length - 1;
  for (let i = 0; i < len; i++) {
    // 对于每个i, 都比较一遍后面的每一项
    // 每一遍的最后一个数都是最大的，即 (需要比较的数组长度 - 1)
    for (let j = 0; j < len - i; j++) {
      if (args[j] > args[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return args;
};
console.log(bubbleSort(arr));
