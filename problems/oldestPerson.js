/**
 * Takes an object where the keys are people's names and the values are their ages.
 * Returns the name of the person with the greatest age.
 *
 * @param {object} obj - The input object of the form { 'Joe': 42, 'Tanya': 11 }
 * @returns {string} - Returns the name of the oldest person
 *
 * ex: oldestPerson({ 'Joe': 42, 'Tanya': 11 })
 * returns: "Joe"
 *
 * ex: oldestPerson({ 'Marcus': 29, 'Julia': 29, 'Kevin': 34 })
 * returns: 'Kevin'
 */
function oldestPerson(obj) {
    //create two arrays - one for names and one for ages to loop through
    let personAge = [];
    let personName = [];
    //pull out the keys and key values from the object and push them into the arrays
    for(let key in obj){
        personAge.push(obj[key]);
        personName.push(key);
    }
    //create variables to hold temp values
    let person = personAge[0];
    let oldest;
    //loop through the ages array to find the largest value 
    for(let i = 0; i < personAge.length; i++){
        if(personAge[i] > person){
            person = personAge[i];
            break;
        }
    }
    //compare the index number of the largest age value to the index in the names array to find matching name
    for(let i = 0; i < personName.length; i++){
        if(personName.indexOf(personName[i]) === personAge.indexOf(person)){
            oldest = personName[i];
            break;
        }
    }
    return oldest;
}

module.exports = oldestPerson