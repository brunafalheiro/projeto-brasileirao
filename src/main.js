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
    for (let i = 0; i < teamOptions.length; i++) {
        let option = document.createElement('option');
        option.value = teamOptions[i];
        option.text = teamOptions[i];
        selectTeam.appendChild(option);
    }


// Options button
document.getElementById('btnTables').addEventListener('click', function() {
    document.getElementById('formTable').style.display = 'block';
    document.getElementById('formTeams').style.display = 'none';
});
  
document.getElementById('btnTeams').addEventListener('click', function() {
    document.getElementById('formTeams').style.display = 'block';
    document.getElementById('formTable').style.display = 'none';
});


// Submit form
document.getElementById('formTeams').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var year = document.getElementById('yearFilterTeams').value;
    var team = document.getElementById('teamFilter').value;
    // Realiza a busca

    document.getElementById('resultTeam').style.display = 'block';
    document.getElementById('resultTable').style.display = 'none';
  },
);

document.getElementById('formTable').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var year = document.getElementById('yearFilterTable').value;
    var team = document.getElementById('teamFilter').value;
    // Realiza a busca

    document.getElementsByClassName('yearSelectedTable')[0].innerText = ` ${year}`;
    console.log(document.getElementsByClassName('yearSelected'))
    document.getElementById('resultTeam').style.display = 'none';
    document.getElementById('resultTable').style.display = 'block';
  },
);


const btnTables = document.getElementById('btnTables');
const btnTeams = document.getElementById('btnTeams');
const buttons = [btnTables, btnTeams];
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