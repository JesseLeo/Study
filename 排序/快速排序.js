let arr = [25, 67, 87, 989, 234, 1, 5, 0, 90];
let quickSort = (args) => {
  if (args.length <= 1) return args;
  const len = args.length;
  let arr1 = [],
    arr2 = [];
  for (let i = 1; i < len; i++) {
    args[i] < args[0] ? arr1.push(args[i]) : arr2.push(args[i]);
  }
  arr1 = quickSort(arr1);
  arr2 = quickSort(arr2);
  arr1.push(args[0]);
  return arr1.concat(arr2);
};
console.log(quickSort(arr));
