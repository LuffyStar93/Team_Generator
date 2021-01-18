
players = [];

// Remplissage du tableau des joueurs si enregistrer dans le localStorage
let setplayers = () => {
    if(localStorage.getItem('Players') === null){
        players = [];

    }else {
        players = localStorage.getItem('Players').split(',');
    }
}
setplayers()

console.log("Players = ", players);
console.log(localStorage);


// Fonction d'ajout de joueurs

addPlayer = function() {
    playerName = document.querySelector('#character').value;
    if (playerName !== "") {
        if (players.indexOf(playerName) == -1) {
            players.push(playerName);
            localStorage.setItem("Players", players);
        }
    }
    document.querySelector('#character').value = "";
    document.querySelector('#character').focus();
};

// fonction pour reset les joueurs

let clearAll = () => {
    players = [];
    localStorage.removeItem('Players');
}


// fonction pour afficher la liste des joueurs

let display_players = () => {
    if (players.length > 0) {
        pl = "Player List: ";
        for (i = 0; i < players.length; i++) {
            pl += players[i] + ", ";
        }
        pl += ",";
    }
    else {
        pl = "No players in the player list!\nType a name in the text box below and hit enter to add some!";
    }
    document.querySelector("#players_list").innerHTML = pl.split(", ,")[0];
}
display_players();