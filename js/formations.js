// Create Function taking arguments for number of players at each postion
function changeFormation(d, dm, m, f) {

// Create arrays to store what player-# divs should be which position
    let goalkeeper = {abbreviation: 'GK', players: []};
    let defenders = {abbreviation: 'D', players: []};
    let defensivemids = {abbreviation: 'DM', players: []};
    let midfielders = {abbreviation: 'M', players: []};
    let forwards = {abbreviation: 'F', players: []};

// Insert players into arrays based on d, dm, m, and f arguments ... Goalkeeper should always contain player 1
    for (let playerCounter = 1; playerCounter <= 11; playerCounter++) {
        if (playerCounter === 1) {
            goalkeeper.players.push(`player-${playerCounter}`);
        } else if ( d != 0 && defenders.players.length < d) {
            defenders.players.push(`player-${playerCounter}`);
        } else if (dm != 0 && defensivemids.players.length < dm ) {
            defensivemids.players.push(`player-${playerCounter}`);
        } else if (m != 0 && midfielders.players.length < m ) {
            midfielders.players.push(`player-${playerCounter}`);
        } else if (f != 0 && forwards.players.length < f ) {
            forwards.players.push(`player-${playerCounter}`);
        }
    };

// All players belonging to the same array should fit on the same row on the page by changing flex-basis
// Listed position on page should change based on what array they belong to

    function setupPlayerPositions(playersByPosition) {
        for (let i=0; i<playersByPosition.players.length; i++){
            let player = document.getElementById(`${playersByPosition.players[i]}`);
            let playerWidth = `${100 / playersByPosition.players.length}%`;
            let position = player.querySelector('.position');
            player.style.flexBasis = playerWidth;
            position.innerHTML = playersByPosition.abbreviation;
        }
    }

    setupPlayerPositions(defenders);
    setupPlayerPositions(defensivemids);
    setupPlayerPositions(midfielders);
    setupPlayerPositions(forwards);

};