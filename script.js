players = [];
nbrPerGroup = Number;

let setplayers = () => {
    if (localStorage.getItem('Players') === null) {
        players = [];

    } else {
        players = localStorage.getItem('Players').split(',');
    }
}
setplayers()

addPlayer = function () {
    playerName = document.querySelector('#character').value;
    if (playerName !== "") {
        if (players.indexOf(playerName) == -1) {
            players.push(playerName);
            localStorage.setItem("Players", players);
        }
    }
    console.log('nbr per groupe = ', nbrPerGroup);
    document.querySelector('#character').value = "";
    document.querySelector('#character').focus();
    display_players();
};

// fonction pour reset les joueurs
let clearAll = () => {
    players = [];
    localStorage.removeItem('Players');
    display_players();
}

// Afficher la liste des joueurs
let display_players = () => {
    if (players.length > 0) {
        pl = "";
        for (i = 0; i < players.length; i++) {
            pl += players[i] + ", ";
        }
        pl += ",";
    } else {
        pl = "Ajoutez des noms au tableau";
    }
    document.querySelector("#players_list").innerHTML = pl.split(", ,")[0];
}
display_players();



let groupDisplay = () => {

    
    const nbrPerGroup = document.querySelector('#nbrPerGroup').value;
    const container = document.querySelector("#groups");

    if(nbrPerGroup === null || nbrPerGroup === undefined || nbrPerGroup <= 0 ){
        return 
    } else {

        while (players.length > 0) {
            const div = document.createElement('div');
            div.classList.add("group")
            div.innerHTML = `<p> Ce groupe contient : <br/> </p>`
            const p = document.createElement('p');
            for (let i = 0; i < nbrPerGroup; i++) {
                if (players.length === 0) {
                    break
                }
                const span = document.createElement('span');
                const index = Math.floor(Math.random() * players.length)
                span.innerHTML = `${players[index]} <br/>`
                span.classList.add("people");
                div.appendChild(span);
                players.splice(index, 1);
            }
            container.appendChild(div)
        }
    }
}