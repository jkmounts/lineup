function changeFormation() {
    for (let i=2; i<=5; i++) {
        let player = document.getElementById(`player-${i}`);
        player.style.flexBasis = '33%';
        let position = player.querySelector('.position');
        position.innerHTML = 'D';
    };
    for (let i=6; i<=8; i++) {
        let player = document.getElementById(`player-${i}`);
        player.style.flexBasis = '33%';
        let position = player.querySelector('.position');
        position.innerHTML = 'M';
    };
    for (let i=9; i<=11; i++) {
        let player = document.getElementById(`player-${i}`);
        player.style.flexBasis = '33%';
        let position = player.querySelector('.position');
        position.innerHTML = 'F';
    };
};