function remove(array, item) {
    var index = array.indexOf(item);
    if (index != -1) {
        return array.splice(index, 1);
    }
    return array;
}

var arr = [1, 2, 3, 1, 2];
remove(arr, 2);
console.log(arr);
remove(arr, 10);
console.log(arr);