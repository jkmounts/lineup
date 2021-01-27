// Create a function to change displayed player info

// Loops Through all drop-down menus on page by id
for (let i=1; i<=11; i++){
    let currentPlayerSlot = document.querySelector(`#player-${i}-name`);

// eventListener looks for changes in drop-down menus
    currentPlayerSlot.addEventListener('input', function(event) {
        // Retrieves the 'value' of selected option which is equal to index of selected player in array in players.js
        let selectedPlayerIndex = event.target.value;
        // Change HTML in our current div using attributes of selected player
        let currentHometownSlot = document.querySelector(`#player-${i} .hometown`);
        let currentPhotoSlot = document.querySelector(`#player-${i} .photo`);
        currentHometownSlot.innerHTML = `${players[selectedPlayerIndex].hometown}`;
        currentPhotoSlot.innerHTML = `<img src="${players[selectedPlayerIndex].photo}">`;
    });
};