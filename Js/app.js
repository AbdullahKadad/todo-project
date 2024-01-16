"use strict";
const userName = window.prompt('Hi there, please enter your name');
const userGender = window.prompt('What is your Gender (male, female)');
let userAge = window.prompt('What is your age');
if (userAge <= 0) {
    window.alert('please enter a valid age');
    userAge = window.prompt('What is your age');
}
console.log(1214141);
const skipMsg = window.confirm('Do you want to skip the welcoming message');
if (skipMsg === true) {
    // do nothing
} else {
    let welcomeMsg = 'Welcome ';
    if (userGender === 'male') {
        welcomeMsg = welcomeMsg + 'Mr ' + userName;
    } else if (userGender === 'female') {
        welcomeMsg = welcomeMsg + 'Ms ' + userName;
    } else {
        welcomeMsg += userName;
    }
    window.alert(welcomeMsg);
}