/**
 * 希尔排序
 * 平均时间复杂度 ： O(n^1.3)
 * 最好时间复杂度 ： O(n)
 * 最坏时间复杂度 ： O(n^2)
 * 空间复杂度 ： O(1)
 * 稳定性： 不稳定
 */
let arr = [25, 67, 87, 989, 234, 1, 5, 0, 90];
let shellSort = (args) => {
  const len = args.length;
  // 初始增量为数组长度的一半
  let gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let m = args[i];
      let j = i;
      // 根据不同的增量，实现分组排序ß
      while (j - gap >= 0) {
        let n = args[j - gap];
        if (m < n) {
          args[j - gap] = m;
          args[j] = n;
        }
        j -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return args;
};
console.log(shellSort(arr));
