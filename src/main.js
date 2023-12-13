import axios from "https://cdn.skypack.dev/axios";

// Generate an array of years from 2003 to 2022
let yearOptions = [];
for (let year = 2003; year <= 2022; year++) {
  yearOptions.push(year);
}

// Create an option element for each year and append it to the select elements
let selectTable = document.getElementById("yearFilterTable");
for (let i = yearOptions.length - 1; i >= 0; i--) {
  let option = document.createElement("option");
  option.value = yearOptions[i];
  option.text = yearOptions[i];
  selectTable.appendChild(option);
}

// Array of team options
let teamOptions = [
  "America-MG",
  "America-RN",
  "Athletico-PR",
  "Atletico-GO",
  "Atletico-MG",
  "Avai",
  "Bahia",
  "Barueri",
  "Botafogo-RJ",
  "Bragantino",
  "Brasiliense",
  "Ceara",
  "Chapecoense",
  "Corinthians",
  "Coritiba",
  "Criciuma",
  "Cruzeiro",
  "CSA",
  "Cuiaba",
  "Figueirense",
  "Flamengo",
  "Fluminense",
  "Fortaleza",
  "Goias",
  "Gremio",
  "Gremio Prudente",
  "Guarani",
  "Internacional",
  "Ipatinga",
  "Joinville",
  "Juventude",
  "Nautico",
  "Palmeiras",
  "Parana",
  "Paysandu",
  "Ponte Preta",
  "Portuguesa",
  "Santa Cruz",
  "Santo Andre",
  "Santos",
  "Sao Caetano",
  "Sao Paulo",
  "Sport",
  "Vasco",
  "Vitoria",
];

// Create an option element for each team and append it to the respective select elements
let selectTeam = document.getElementById("teamFilter");
let teamAdversary1 = document.getElementById("teamOneAdversary");
let teamAdversary2 = document.getElementById("teamTwoAdversary");
const teamManager = document.getElementById('teamManager');
for (let i = 0; i < teamOptions.length; i++) {
  let option1 = document.createElement("option");
  option1.value = teamOptions[i];
  option1.text = teamOptions[i];
  selectTeam.appendChild(option1);

  let option2 = document.createElement("option");
  option2.value = teamOptions[i];
  option2.text = teamOptions[i];
  teamAdversary1.appendChild(option2);

  let option3 = document.createElement("option");
  option3.value = teamOptions[i];
  option3.text = teamOptions[i];
  teamAdversary2.appendChild(option3);
  
  let option4 = document.createElement("option");
  option4.value = teamOptions[i];
  option4.text = teamOptions[i];
  teamManager.appendChild(option4);
}

// Function to show the selected form and hide the others
function showForm(formId) {
    document.getElementById('formTable').style.display = formId === 'formTable' ? 'block' : 'none';
    document.getElementById('formTeams').style.display = formId === 'formTeams' ? 'block' : 'none';
    document.getElementById('formAdversary').style.display = formId === 'formAdversary' ? 'block' : 'none';
    document.getElementById('formManager').style.display = formId === 'formManager' ? 'block' : 'none';
    document.getElementById('formCards').style.display = formId === 'formCards' ? 'block' : 'none';
}

// Event listeners for the buttons
document.getElementById("btnTables").addEventListener("click", function () {
  showForm("formTable");
});

document.getElementById("btnTeams").addEventListener("click", function () {
  showForm("formTeams");
});

document.getElementById("btnAdversary").addEventListener("click", function () {
  showForm("formAdversary");
});

document.getElementById('btnManager').addEventListener('click', function() {
    showForm('formManager');
});

document.getElementById('btnCards').addEventListener('click', function() {
    showForm('formCards');
});

// Submit event listener for the teams form
document
  .getElementById("formTeams")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    var team = document.getElementById("teamFilter").value;
    // Perform the search

    document.getElementsByClassName(
      "teamSelectedTeam"
    )[0].innerText = `${team}`;

    // Arbitrary team data
    const teamData = (await axios.get(`http://localhost:3000/time/${team}`))
      .data[0];

    // Update the HTML elements with the team data
    document.querySelector(".total-score-div .result").innerText =
      teamData.pontos_acumulados;
    document.querySelector(".goals-made-div .result").innerText =
      teamData.Gols_Feitos;
    document.querySelector(".goals-taken-div .result").innerText =
      teamData.Gols_sofridos;
    document.querySelector(".total-goals-div .result").innerText =
      teamData.saldo_geral;

    // Show the team result and hide the others
    document.getElementById("resultTeam").style.display = "block";
    document.getElementById("resultTable").style.display = "none";
    document.getElementById("resultAdversary").style.display = "none";
    document.getElementById("resultManager").style.display = "none";
    document.getElementById("resultCards").style.display = "none";
  });

// Submit event listener for the table form
document
  .getElementById("formTable")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    var year = document.getElementById("yearFilterTable").value;
    // Perform the search

    document.getElementsByClassName(
      "yearSelectedTable"
    )[0].innerText = ` ${year}`;

    // Arbitrary data for multiple rows
    const rowsData = (
      await axios.get(`http://localhost:3000/campeonato/${year}`)
    ).data;

    const arrayedRows = rowsData.map((row) => {
      return [
        row.Nome,
        row.PONTOS_ACUMULADOS,
        row.JOGOS,
        row.VITORIAS,
        row.DERROTAS,
        row.EMPATES,
        row.GOLS_FEITOS,
        row.GOLS_SOFRIDOS,
        row.GOLS_FEITOS - row.GOLS_SOFRIDOS,
      ];
    });

    // Create and append the rows to the table
    for (var i = 0; i < arrayedRows.length; i++) {
      var row = document.createElement("tr");

      // Add the placement as the first cell
      var placementCell = document.createElement("td");
      placementCell.innerText = i + 1 + "º";
      row.appendChild(placementCell);

      // Add the other cells
      for (var j = 0; j < arrayedRows[i].length; j++) {
        var cell = document.createElement("td");
        cell.innerText = arrayedRows[i][j];
        row.appendChild(cell);
      }

      // Append the row to the table
      document.getElementById("tbody-result").appendChild(row);
    }
    // Show the table result and hide the others
    document.getElementById("resultTeam").style.display = "none";
    document.getElementById("resultTable").style.display = "block";
    document.getElementById("resultAdversary").style.display = "none";
    document.getElementById("resultManager").style.display = "none";
    document.getElementById("resultCards").style.display = "none";
  });

// Submit event listener for the adversary form
document
  .getElementById("formAdversary")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    var team1 = document.getElementById("teamOneAdversary").value;
    var team2 = document.getElementById("teamTwoAdversary").value;
    // Perform the search

    document.getElementById("resultAdversary1").innerText = `${team1}x`;
    document.getElementById("resultAdversary2").innerText = `${team2}`;

    const adversaryData = (
      await axios.get(`http://localhost:3000/confronto/${team1}/${team2}`)
    ).data[0];

    // Arbitrary data for adversary comparison
    document.getElementsByClassName(
      "resultWinsAdversary1"
    )[0].innerText = `Vitórias ${team1}: ${adversaryData.VitoriasPrimeiro}`;
    document.getElementsByClassName(
      "resultWinsAdversary2"
    )[0].innerText = `Vitórias ${team2}: ${adversaryData.VitoriasSegundo}`;
    document.getElementsByClassName(
      "resultTies"
    )[0].innerText = `Empates: ${adversaryData.Empates}`;
    document.getElementsByClassName(
      "resultGoalsAdversary1"
    )[0].innerText = `Gols ${team1}: ${adversaryData.GolsPrimeiro}`;
    document.getElementsByClassName(
      "resultGoalsAdversary2"
    )[0].innerText = `Gols ${team2}: ${adversaryData.GolsSegundo}`;

    // Show the adversary result and hide the others
    document.getElementById("resultAdversary").style.display = "block";
    document.getElementById("resultTable").style.display = "none";
    document.getElementById("resultTeam").style.display = "none";
    document.getElementById("resultManager").style.display = "none";
    document.getElementById("resultCards").style.display = "none";
  });

document.getElementById('formManager').addEventListener('submit', async function(e) {
    e.preventDefault();
    document.getElementById("resultAdversary").style.display = "none";
    document.getElementById("resultTable").style.display = "none";
    document.getElementById("resultTeam").style.display = "none";
    document.getElementById("resultManager").style.display = "block";
    document.getElementById("resultCards").style.display = "none";
});

document.getElementById('formCards').addEventListener('submit', async function(e) {
    const card = document.getElementById("cardsInput").value;
    document.getElementById("selectedCard").innerText = `Cartão ${card}`;

    console.log(card)
    // Arbitrary data for cards
    const teste = [{nome: "A", cartoes: 6}, {nome: "B", cartoes: 8}, {nome: "C", cartoes: 4}];

    var parentElement = document.querySelector('.cards');
    parentElement.innerHTML = '';

    // Para cada item em teste, cria um novo elemento filho
    for (var i = 0; i < teste.length; i++) {
        var div = document.createElement('div');
        div.className = 'total-score-div';

        var p1 = document.createElement('p');
        p1.className = 'obj';
        p1.innerText = 'Jogador:';

        var p2 = document.createElement('p');
        p2.className = 'result';
        p2.innerText = teste[i].nome;

        var p3 = document.createElement('p');
        p3.className = 'obj';
        p3.innerText = 'Cartões amarelos:';

        var p4 = document.createElement('p');
        p4.className = 'result';
        p4.innerText = teste[i].cartoes.toString();

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);

        parentElement.appendChild(div);
    }

    
    
    e.preventDefault();
    document.getElementById("resultAdversary").style.display = "none";
    document.getElementById("resultTable").style.display = "none";
    document.getElementById("resultTeam").style.display = "none";
    document.getElementById("resultManager").style.display = "none";
    document.getElementById("resultCards").style.display = "block";
});

// Add event listeners to the buttons for selection styling
const btnTables = document.getElementById('btnTables');
const btnTeams = document.getElementById('btnTeams');
const btnAdversary = document.getElementById('btnAdversary');
const btnManager = document.getElementById('btnManager');
const btnCards = document.getElementById('btnCards');
const buttons = [btnTables, btnTeams, btnAdversary, btnManager, btnCards];
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Add the selected class to the clicked button and remove the not-selected class
        button.classList.add('button-selected');
        button.classList.remove('button-not-selected');
    
        // Add the not-selected class to all other buttons and remove the selected class
        buttons.filter(btn => btn !== button).forEach(btn => {
          btn.classList.add('button-not-selected');
          btn.classList.remove('button-selected');
        });
    });
});
