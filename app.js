// selectors
let totalCharacter = document.getElementById("Number");
let upperSet = document.getElementById("uppercase");
let lowerSet = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let btn = document.getElementById("btn");
let input = document.getElementById("input");

// creating data 
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
let lowerCase = upperCase.toLowerCase();
let digit = "1234567890";
let symbol = "@#$%^*&";

// creating random character algorithm
const genRandom = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const genPassword = (password = "") => {
    if (upperSet.checked) {
        password += genRandom(upperCase);
    }
    if (lowerSet.checked) {
        password += genRandom(lowerCase);
    }
    if (numbers.checked) {
        password += genRandom(digit);
    }
    if (symbols.checked) {
        password += genRandom(symbol);
    }
    // creating pass as per required figure (MOST IMPORTANT !!)
    if (password.length < totalCharacter.value) {
        return genPassword(password);
        
    }

    input.value = limitFig(password , totalCharacter.value);
}

// Inserting event listener 
btn.addEventListener("click" , function () {
    genPassword();
})

// creating limit of figure required for password

const limitFig = (str , num) => {
    if (str.length > num) {
        let subStr = str.substring(0 , num);
        return subStr;
    } else{
        return str;
    }
}







