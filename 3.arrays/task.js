function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((element,index) => element == arr2[index])
}

function advancedFilter(arr) {
  return arr.filter(e => e >= 0).filter(e => e % 3 === 0).map((item) => item * 10)
}
