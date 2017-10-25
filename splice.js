function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);


//splice method
//The splice() method adds/removes items to/from an array, and returns the removed item(s).
//array.splice(index, howmany, item1, ....., itemX)
//item1, ..., itemX	Optional. The new item(s) to be added to the array