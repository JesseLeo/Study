/**
 * 基数排序
 * 平均时间复杂度 ： O(n * k)
 * 最好时间复杂度 ： O(n * k)
 * 最坏时间复杂度 ： O(n * k)
 * 空间复杂度 ： O(n + k)
 * 稳定性： 稳定
 */
let arr = [25, 67, 87, 989, 234, 1, 5, 0, 90];
let countSort = (args) => {
  const len = args.length;
  let obj = {};
  let index = 0;
  // 遍历数组，判断对象上是否存在键值对，存在 + 1，否则设置为1
  for (let i = 0; i < len; i++) {
    !obj[args[i]] ? (obj[args[i]] = 1) : obj[args[i]]++;
  }
  // 遍历对象， 取值
  for (let key in obj) {
    while (obj[key] > 0) {
      args[index] = +key;
      obj[key]--;
      index++;
    }
  }
  return args;
};
console.log(countSort(arr));
