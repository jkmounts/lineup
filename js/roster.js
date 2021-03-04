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

// Create Divs for each player
function generatePlayers(playersArray, targetDiv) {
    playersArray.forEach(player => {
        const newDiv = document.createElement('div');
        const playerName = document.createElement('h2');
        playerName.classList.add('player-name');
        playerName.textContent = player.name;
        newDiv.appendChild(playerName);
        const playerHometown = document.createElement('p');
        playerHometown.classList.add('player-hometown');
        playerHometown.textContent = player.hometown;
        newDiv.appendChild(playerHometown);
        const playerBio = document.createElement('p');
        playerBio.classList.add('player-bio');
        playerBio.textContent = player.bio;
        newDiv.appendChild(playerBio);
        const playerPhoto = player.photo;
        newDiv.style.backgroundImage = `url(${playerPhoto})`;
        newDiv.classList.add('player');
        targetDiv.appendChild(newDiv);
    });
}

// Grow Player Box when clicked
const playerBoxes = document.querySelectorAll('.player');

function expandBox() {
    this.classList.toggle('openPlayer');
};

playerBoxes.forEach(box => box.addEventListener('click', expandBox));