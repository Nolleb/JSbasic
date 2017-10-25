//sort()
//The sort() method is one of the strongest array methods.
//sort plius grand au plus petit sort(function(a, b){return b - a});
//sort() plus petit au plus grand sort(function(a, b){return b - a});
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}