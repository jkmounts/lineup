// Create Function taking arguments for number of players at each postion
function changeFormation(d, dm, m, f) {

// Create arrays to store what player-# divs should be which position
    let goalkeeper = [];
    let defenders = [];
    let defensivemids = [];
    let midfielders = [];
    let forwards = [];

// Insert players into arrays based on d, dm, m, and f arguments ... Goalkeeper should always contain player 1
    for (let playerCounter = 1; playerCounter <= 11; playerCounter++) {
        if (playerCounter === 1) {
            goalkeeper.push(`player-${playerCounter}`);
        } else if ( d != 0 && defenders.length < d) {
            defenders.push(`player-${playerCounter}`);
        } else if (dm != 0 && defensivemids.length < dm ) {
            defensivemids.push(`player-${playerCounter}`);
        } else if (m != 0 && midfielders.length < m ) {
            midfielders.push(`player-${playerCounter}`);
        } else if (f != 0 && forwards.length < f ) {
            forwards.push(`player-${playerCounter}`);
        }
    };

// All players belonging to the same array should fit on the same row on the page by changing flex-basis
// Listed position on page should change based on what array they belong to
    for (let i=0; i < defenders.length ; i++) {
        let player = document.getElementById(`${defenders[i]}`);
        player.style.flexBasis = `${100 / defenders.length}%`;
        let position = player.querySelector('.position');
        position.innerHTML = 'D';
    };
    for (let i=0; i < defensivemids.length ; i++) {
        let player = document.getElementById(`${defensivemids[i]}`);
        player.style.flexBasis = `${100 / defensivemids.length}%`;
        let position = player.querySelector('.position');
        position.innerHTML = 'DM';
    };
    for (let i=0; i < midfielders.length ; i++) {
        let player = document.getElementById(`${midfielders[i]}`);
        player.style.flexBasis = `${100 / midfielders.length}%`;
        let position = player.querySelector('.position');
        position.innerHTML = 'M';
    };
    for (let i=0; i < forwards.length ; i++) {
        let player = document.getElementById(`${forwards[i]}`);
        player.style.flexBasis = `${100 / forwards.length}%`;
        let position = player.querySelector('.position');
        position.innerHTML = 'F';
    };
};