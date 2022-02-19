'use strict'
// Global variables
const today = new Date();
const day = `${today.getDate()}`.padStart(2,0)
const month = `${today.getMonth()}`.padStart(2,0)
const year = today.getFullYear()

const dateString = ` ${month}/${day}/${year}`;

// HTML Elements
const currentDateEl = document.getElementById('current-date');
currentDateEl.innerHTML = dateString;


const physicalCard = document.querySelector("card1");
const mentalCard = document.querySelector("card2");
const dietaryCard = document.querySelector("card3"); 

physicalCard.addEventListener("click", function () {

});

mentalCard.addEventListener("click", function () {

});

dietaryCard.addEventListener("click", function () {

});

