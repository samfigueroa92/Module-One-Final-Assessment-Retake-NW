/**
* Removes all strings ending in "!" from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that don't end with "!"
*
* ex: removeStringsEndingInBang(["Hello", "Hi!", "Greetings"])
* returns: ["Hello", "Greetings"]
*
* ex: removeStringsEndingInBang(["!", "", "a"])
* returns: ["", "a"]
*/

function removeStringsEndingInBang(arr) {
    //loop through the array
    //check if each element ENDS with a "!"
    //remove that element
    //return original array
    
    for(let i = 0; i < arr.length; i++){
        //why do you access the last index with arr.length-1? <-- you don't, i wrote it wrong; needs to be arr[i][arr[i].length-1]
        if(arr[i][arr[i].length-1] === '!'){
            arr.splice(i, 1);
        }
    }
    return arr;
}

module.exports = removeStringsEndingInBang
