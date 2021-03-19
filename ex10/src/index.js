// only change code below this line
function mySplice(arr1, arr2, n) {

    arr2.splice(n, 0, ...arr1.reverse());

    return arr2;

}
// Only change code above this line

console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2)); // Change this line
module.exports = mySplice;