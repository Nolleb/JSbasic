//indexOf
//The indexOf() method returns the position of the first occurrence of a specified value in a string.

//This method returns -1 if the value to search for never occurs.

//Note: The indexOf() method is case sensitive.


function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) === -1)
      return false;
  }
  return true;
 }

mutation(["hello", "hey"]);