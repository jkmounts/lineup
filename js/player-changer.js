// Create a function to change displayed player info

playerDivs = document.querySelectorAll('.player')

// Create event listener on each select box within player divs
playerDivs.forEach(div => (div.querySelector('select')).addEventListener('input', function(e) {
    // Retrieves the 'value' of selected option which is equal to index of selected player in array in players.js
    let selectedPlayerIndex = e.target.value;
    (div.querySelector('.hometown')).innerHTML = `${players[selectedPlayerIndex].hometown}`;
    (div.querySelector('.photo')).innerHTML = `<img src="${players[selectedPlayerIndex].photo}" alt="${players[selectedPlayerIndex].name}">`;
}));
