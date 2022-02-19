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




const physicalCard = document.querySelector("#physicalBtn");
const mentalCard = document.querySelector("#mentalBtn");
const dietaryCard = document.querySelector("#dietaryBtn"); 

physicalCard.addEventListener("click", function () {
    
});

mentalCard.addEventListener("click", function () {

});

dietaryCard.addEventListener("click", function () {

});