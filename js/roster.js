// Assign Variables to Divs on Page
const forwardsDiv = document.getElementById('forwards');
const midfieldersDiv = document.getElementById('midfielders');
const defendersDiv = document.getElementById('defenders');
const goalkeepersDiv = document.getElementById('goalkeepers');

// Filter Players array by positions
const forwards = players.filter(player => player.position === 'F');
const midfielders = players.filter(player => player.position === 'M');
const defenders = players.filter(player => player.position === 'D');
const goalkeepers = players.filter(player => player.position === 'GK');

// Select playerBoxes to add event Listeners
let playerBoxes = document.querySelectorAll('.player');

function expandBox() {
    this.classList.toggle('openPlayer');
};

// Create Divs for each player
function generatePlayers(playersArray, targetDiv) {
    targetDiv.classList.toggle('open');
    if (!targetDiv.hasChildNodes()) {
        playersArray.forEach(player => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('player');

            const playerName = document.createElement('h2');
            playerName.classList.add('player-name');
            playerName.textContent = player.name;
            newDiv.appendChild(playerName);

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('player-details');

            const playerHometown = document.createElement('p');
            playerHometown.classList.add('player-hometown');
            playerHometown.textContent = player.hometown;
            detailsDiv.appendChild(playerHometown);

            const playerBio = document.createElement('p');
            playerBio.classList.add('player-bio');
            playerBio.textContent = player.bio;
            detailsDiv.appendChild(playerBio);

            const playerPhoto = player.photo;
            newDiv.style.backgroundImage = `url(${playerPhoto})`;

            newDiv.appendChild(detailsDiv);
            
            targetDiv.appendChild(newDiv);

            // Need to re-run a query selector inside function to get the new divs just created
            playerBoxes = document.querySelectorAll('.player');
            playerBoxes.forEach(box => box.addEventListener('click', expandBox));
        });
    }
}
