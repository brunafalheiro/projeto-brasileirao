let yearOptions = [];
for (let year = 2003; year <= 2022; year++) {
    yearOptions.push(year);
}

// Create an option element for each year
let selectTable = document.getElementById('yearFilterTable');
let selectTeams = document.getElementById('yearFilterTeams');
let selects = [selectTable, selectTeams];

selects.forEach(select => {
    for (let i = yearOptions.length - 1; i >= 0; i--) {
        let option = document.createElement('option');
        option.value = yearOptions[i];
        option.text = yearOptions[i];
        select.appendChild(option);
    }
});

// ADICIONAR AQUI TODOS OS TIMES
let teamOptions = ["Team1", "Team2", "Team3", "Team4", "Team5"];

// Create an option element for each team
let selectTeam = document.getElementById('teamFilter');
let teamAdversary1 = document.getElementById('teamOneAdversary');
let teamAdversary2 = document.getElementById('teamTwoAdversary');
for (let i = 0; i < teamOptions.length; i++) {
    let option1 = document.createElement('option');
    option1.value = teamOptions[i];
    option1.text = teamOptions[i];
    selectTeam.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = teamOptions[i];
    option2.text = teamOptions[i];
    teamAdversary1.appendChild(option2);

    let option3 = document.createElement('option');
    option3.value = teamOptions[i];
    option3.text = teamOptions[i];
    teamAdversary2.appendChild(option3);
}


// Options button
document.getElementById('btnTables').addEventListener('click', function() {
    document.getElementById('formTable').style.display = 'block';
    document.getElementById('formTeams').style.display = 'none';
    document.getElementById('formAdversary').style.display = 'none';
});
  
document.getElementById('btnTeams').addEventListener('click', function() {
    document.getElementById('formTeams').style.display = 'block';
    document.getElementById('formTable').style.display = 'none';
    document.getElementById('formAdversary').style.display = 'none';
});

document.getElementById('btnAdversary').addEventListener('click', function() {
    document.getElementById('formAdversary').style.display = 'block';
    document.getElementById('formTeams').style.display = 'none';
    document.getElementById('formTable').style.display = 'none';
});


// Submit form
document.getElementById('formTeams').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var year = document.getElementById('yearFilterTeams').value;
    var team = document.getElementById('teamFilter').value;
    // Realiza a busca

    document.getElementsByClassName('teamSelectedTeam')[0].innerText = `${team}`;
    document.getElementsByClassName('yearSelectedTeam')[0].innerText = ` (${year})`;

    document.getElementById('resultTeam').style.display = 'block';
    document.getElementById('resultTable').style.display = 'none';
    document.getElementById('resultAdversary').style.display = 'none';
  },
);

document.getElementById('formTable').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var year = document.getElementById('yearFilterTable').value;
    var team = document.getElementById('teamFilter').value;
    // Realiza a busca

    document.getElementsByClassName('yearSelectedTable')[0].innerText = ` ${year}`;

    document.getElementById('resultTeam').style.display = 'none';
    document.getElementById('resultTable').style.display = 'block';
    document.getElementById('resultAdversary').style.display = 'none';
  },
);

document.getElementById('formAdversary').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var team1 = document.getElementById('teamOneAdversary').value;
    var team2 = document.getElementById('teamTwoAdversary').value;
    // Realiza a busca

    document.getElementById('resultAdversary1').innerText = `${team1}x`;
    document.getElementById('resultAdversary2').innerText = `${team2}`;


    document.getElementsByClassName('resultWinsAdversary1')[0].innerText = `Vitórias ${team1}: 32`; // number only for tests, remove it and change to the correspondent value
    document.getElementsByClassName('resultWinsAdversary2')[0].innerText = `Vitórias ${team2}: 18`;
    document.getElementsByClassName('resultTies')[0].innerText = `Empates: 11`;
    document.getElementsByClassName('resultGoalsAdversary1')[0].innerText = `Gols ${team1}: 48`;
    document.getElementsByClassName('resultGoalsAdversary2')[0].innerText = `Gols ${team2}: 12`;

    

    document.getElementById('resultAdversary').style.display = 'block';
    document.getElementById('resultTable').style.display = 'none';
    document.getElementById('resultTeam').style.display = 'none';
  },
);


const btnTables = document.getElementById('btnTables');
const btnTeams = document.getElementById('btnTeams');
const btnAdversary = document.getElementById('btnAdversary');
const buttons = [btnTables, btnTeams, btnAdversary];
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