// Create a function to change displayed player info


for (let i=1; i<=11; i++){
    let currentPlayerSlot = document.querySelector(`#player-${i}-name`);

    currentPlayerSlot.addEventListener('input', function(event) {
        let selectedPlayerIndex = event.target.value;
        let currentHometownSlot = document.querySelector(`#player-${i} .hometown`);
        let currentPhotoSlot = document.querySelector(`#player-${i} .photo`);
    });
};