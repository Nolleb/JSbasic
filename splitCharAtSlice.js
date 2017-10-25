
function titleCase(str) {
    var arr=str.split(" ");
    var capital =[];
    for(var i=0;i<arr.length;i++ ){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        capital.push(arr[i]);
    }
    return capital.join(" ");
}

titleCase("I'm a little tea pot");

//slice
/*arr.slice()
arr.slice(début)
arr.slice(début, fin)*/