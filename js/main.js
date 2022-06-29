/**************************************************
********************  ***************************
**************************************************/

// get main elements 
let textAreaBox = document.querySelector("#text");
let letterNumberBox = document.querySelector("#letter");
let wordNumberBox = document.querySelector("#word");

textAreaBox.oninput = function () {
    // Get the text to be operated on
    let text = textAreaBox.value;
    // Change the word count value as the word count increases
    letterNumberBox.textContent = counterLetter(text);
    // Change the word count value as the word count increases
    wordNumberBox.textContent = counterWord(text);
}

// Fuction get the text to be operated on
function counterWord(textWord) {
    // Convert string to array
    textWord = textWord.split(" ");
    // Filter the results so that the spaces are not an element of the computed array
    textWord = textWord.filter(function(el) {
        return el != ""
    });
    // Return word count
    return textWord.length
}

// Fuction get the text to be operated on
function counterLetter(textLetter) {
    // Return letter count
    return textLetter.length
}


