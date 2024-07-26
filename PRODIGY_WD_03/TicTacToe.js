var all = document.getElementsByClassName('cell');
var player_1 = true;

Array.from(all).forEach(element => { 
    element.addEventListener('click', function() {
        if (element.innerHTML === "") { // Check if the cell is empty
            if (player_1 === true) {
                element.innerHTML = "X";
                player_1 = false;
            } else {
                element.innerHTML = "O";
                player_1 = true;
            }
            checkWinner();
        }
    });
});

function checkWinner() {
    var winner = "";
    var win_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6] // Diagonal
    ];

    win_combinations.forEach(combination => {
        if (all[combination[0]].innerHTML !== "" &&
            all[combination[0]].innerHTML === all[combination[1]].innerHTML && 
            all[combination[1]].innerHTML === all[combination[2]].innerHTML) {
            winner = all[combination[0]].innerHTML;
        }
    });

    if (winner !== "") {
        alert(winner + " wins!");
        resetGame();
    }
}

function resetGame() {
    Array.from(all).forEach(element => {
        element.innerHTML = "";
    });
    player_1 = true;
}
