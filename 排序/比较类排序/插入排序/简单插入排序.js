/**
 * 简单插入排序
 * 平均时间复杂度 ： O(n^2)
 * 最好时间复杂度 ： O(n)
 * 最坏时间复杂度 ： O(n^2)
 * 空间复杂度 ： O(1)
 * 稳定性： 稳定
 */
let arr = [25, 67, 87, 989, 234, 1, 5, 0, 90];
/**
 * 插入排序像是打牌，你从桌面上拿起牌放到手里后，是不是需要进行规整排序，
 * 插入排序也是这个道理，可以将一个数组看成是两个部分，一部分是你手里的牌，是已经排序好的，
 * 另一部分是桌面上的牌，是未经过排序的，我们要做的就是将最面上的牌拿起来，放到手里进行排序。
 */
let insertSort = (args) => {
  const len = args.length;
  // 定义一个手里的牌堆
  let handle = [];
  // 直接抓第一张牌当作手牌
  handle.push(args[0]);
  for (let i = 1; i < len; i++) {
    // 抓牌
    let newElement = args[i];
    // 和手里的牌依次比较（从后往前比较）
    for (let j = handle.length - 1; j >= 0; j--) {
      if (newElement > handle[j]) {
        handle.splice(j + 1, 0, newElement);
        break;
      }
      // 如果比较到第一个还不符合上面条件，则直接插入第一项
      if (j == 0) handle.unshift(newElement);
    }
  }
  return handle;
};
console.log(insertSort(arr));
