// Create Function taking arguments for number of players at each postion
function changeFormation(totalDefenders, totalDefensiveMids, totalMidfielders, totalForwards) {

// Create arrays to store what player-# divs should be which position
    let goalkeeper = {abbreviation: 'GK', players: []};
    let defenders = {abbreviation: 'D', players: []};
    let defensivemids = {abbreviation: 'DM', players: []};
    let midfielders = {abbreviation: 'M', players: []};
    let forwards = {abbreviation: 'F', players: []};

// Insert players into arrays based on changeFormation parameters ... Goalkeeper should always contain player 1
    for (let whichPlayer = 1; whichPlayer <= 11; whichPlayer++) {

        const isPlayerGoalie = whichPlayer === 1;
        const hasDefenders = totalDefenders != 0;
        const hasDefensiveMids = totalDefensiveMids != 0;
        const hasMidfielders = totalMidfielders != 0;
        const hasForwards = totalForwards !=0;

        if (isPlayerGoalie) {
            goalkeeper.players.push(`player-${whichPlayer}`);
        } else if (hasDefenders && defenders.players.length < totalDefenders) {
            defenders.players.push(`player-${whichPlayer}`);
        } else if (hasDefensiveMids && defensivemids.players.length < totalDefensiveMids ) {
            defensivemids.players.push(`player-${whichPlayer}`);
        } else if (hasMidfielders && midfielders.players.length < totalMidfielders ) {
            midfielders.players.push(`player-${whichPlayer}`);
        } else if (hasForwards && forwards.players.length < totalForwards ) {
            forwards.players.push(`player-${whichPlayer}`);
        }
    };

// All players belonging to the same object should fit on the same row on the page by changing flex-basis
// Listed position on page should change based on what object they belong to

    function setupPlayerPositions(playersByPosition) {
        for (let i=0; i<playersByPosition.players.length; i++){
            let player = document.getElementById(`${playersByPosition.players[i]}`);
            let playerWidth = `${100 / playersByPosition.players.length}%`;
            let position = player.querySelector('.position');
            player.style.flexBasis = playerWidth;
            position.innerHTML = playersByPosition.abbreviation;
        }
    };

    const playerPositions = [defenders, defensivemids, midfielders, forwards];
    playerPositions.forEach(setupPlayerPositions);

};

// Highlight clicked button and unhighlight the rest
const formationButtons = document.querySelectorAll('.formation-select button');
function selectButton() {
    formationButtons.forEach(button => button.classList.remove('selected'));
    this.classList.add('selected');
}

formationButtons.forEach(button => button.addEventListener('click', selectButton));
