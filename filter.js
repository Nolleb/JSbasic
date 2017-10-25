//filter()
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).

//Note: filter() does not execute the function for array elements without values.

//Note: filter() does not change the original array

function bouncer(arr) {
 //Only return values that evaluate as true inside the array.
  return arr.filter(function(value){
    if (value){
      return (value);
    }
  });
}

bouncer([7, "ate", "", false, 9]);