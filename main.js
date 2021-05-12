"use strict";
const userInput = document.querySelector(".number");
const userInputValue = userInput.value;
const button = document.querySelector(".button_js");
const boxOne = document.querySelector(".box1_js");
const boxTwo = document.querySelector(".box2_js")



function getRandomNumber(max) {
  const randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}

function compareNumber{
    if (userInputValue < randomNumber) {
      boxOne.innerHTML = "Demasiado bajo";
    } else {
      
        boxOne.innerHTML = "Demasiado alto";
    }
}

function handleClickTry(){
    getRandomNumber();
    compareNumber();
}

button.addEventListener("click", handleClickTry);


