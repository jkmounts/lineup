// Create a function to change displayed player info


for (let i=1; i<=11; i++){
    let currentPlayer = document.querySelector(`#player-${i}-name`);
    currentPlayer.addEventListener('input', function(event) {
        console.log(event.target.value);
    });
};