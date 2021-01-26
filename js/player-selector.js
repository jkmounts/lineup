// Create an empty string to store HTML for drop-down options
let selectorOptions = ''; 

// Find all drop-down selects on page
const selectors = document.querySelectorAll("select");

// Create function to insert an HTML option for each players name into selectorOptions
for (let i=0; i<players.length; i++) {
    selectorOptions += `<option value="${i}">${players[i].name}</option>`;
}

// Insert generated selectorOptions into all selectors on page
for(let i=0; i<selectors.length; i++) {
    selectors[i].innerHTML = selectorOptions;
}