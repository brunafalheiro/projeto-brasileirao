// Year options
let yearOptions = [];
for (let year = 2003; year <= 2022; year++) {
    yearOptions.push(year);
}

// Create an option element for each year
let select = document.getElementById('yearFilter');
for (let i = yearOptions.length - 1; i >= 0; i--) {
    let option = document.createElement('option');
    option.value = yearOptions[i];
    option.text = yearOptions[i];
    select.appendChild(option);
}

// Team options
let teamOptions = ["Todos", "Team1", "Team2", "Team3", "Team4", "Team5"];

// Create an option element for each team
let selectTeam = document.getElementById('teamFilter');
for (let i = 0; i < teamOptions.length; i++) {
    let option = document.createElement('option');
    option.value = teamOptions[i];
    option.text = teamOptions[i];
    selectTeam.appendChild(option);
}


// Submit form
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var year = document.getElementById('yearFilter').value;
    var team = document.getElementById('team').value;
    console.log(year, team)
    // Realiza a busca
  },
);