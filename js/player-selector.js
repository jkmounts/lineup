// Create an empty string to store HTML for drop-down options
let selectorOptions = ''; 

// Find all drop-down selects on page
const selectors = document.querySelectorAll("select");

// Create function to insert an HTML option for each players name into selectorOptions
players.forEach((player, index)=> selectorOptions += `<option value="${index}">${player.name}</option>`);

// Insert generated selectorOptions into all selectors on page
selectors.forEach(selector => selector.innerHTML = selectorOptions);