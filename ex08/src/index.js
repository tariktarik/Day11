// Only change code below this line
function myMutation(arr) {
    var string1 = [...arr[0].toLowerCase()].sort();
    var string2 = [...arr[1].toLowerCase()].sort();


    for (var i = 0; i < string2.length; i++) {
        if (string1.indexOf(string2[i]) < 0) {
            return false;
        }
    
    }
    return true;


}

// Only change code above this line
console.log(myMutation(["hello", "Hello"])); // Change this line
module.exports = myMutation;