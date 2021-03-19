// Only change code below this line
function myBouncer(arr) {
    var truthy = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            truthy.push(arr[i])
        }
    }

    return truthy;

}
// Only change code above this line

console.log(myBouncer([null, NaN, 1, 2, undefined])); // Change this line
module.exports = myBouncer;