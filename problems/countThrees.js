/**
* Counts the number of threes in a given number.
* @param {number} n - The input number.
* @returns {number} - Returns how many threes are in the input.
*
* ex: countThrees(300)
* returns: 1
*
* ex: countThrees(3203)
* returns: 2
*
* ex: countThrees(47)
* returns: 0
*/

function countThrees(n) {
    let str = '' + n
    let strArr = str.split('')
    let sum = 0;

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === '3'){
            sum += 1;
        }
    }
return sum;
}

module.exports = countThrees
