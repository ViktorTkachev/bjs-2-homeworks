function compareArrays(arr1, arr2) {
  let result;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length != arr2.length || arr1[i] != arr2[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(e => e >= 0).filter(e => e % 3 === 0).map((item) => item * 10)
  return resultArr;
}
