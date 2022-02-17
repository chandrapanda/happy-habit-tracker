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




