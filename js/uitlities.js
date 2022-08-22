// players array
const playerNames = [];

//update player list display function
function displayPlayer(playerNames) {
  // acces the player list
  const playerList = document.getElementById("playerList");
  // clearing the previous value for each loop
  playerList.innerHTML = "";
  // loop through array of players
  for (let i = 0; i < playerNames.length; i++) {
    const name = playerNames[i];

    // each iteration list create and add conditions
    const tr = document.createElement("tr");

    tr.innerHTML = ` 
    <tr>
      <th>${i + 1 + " ."}</th>
      <td>   ${name}</td>
    </tr>`;
    playerList.appendChild(tr);
  }
}

// selecting player function

function addPlayers(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;

  const playerNameObj = {
    playerName: playerName,
  };
  // up-to 5 players selection condition and show alert im more than 5
  if (playerNames.length <= 4) {
    playerNames.push(playerName);
  } else {
    alert("You are not allowed to add more than 5 Players");
  }

  //  update player list passed to the display function
  displayPlayer(playerNames);
}
