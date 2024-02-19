// ====================================================================== //
// Code permettant la mise en place des animations du menu/de la side bar //
// ====================================================================== //
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");});}
			
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{sidebar.classList.toggle("close");});


// ===================================================================== //
// Fonctions permettant d'afficher/de faire disparaître une div "pop-up" // 
// ===================================================================== //
function openPopup() {
	document.getElementById("accueil-popup").style.display = "block";
}
		
function closePopup() {
	document.getElementById("accueil-popup").style.display = "none";
}


// =============================================================================================================== //
// Fonction permettant de rediriger vers la page d'ajout d'opérateur lors que l'on clique sur Ajouter un opérateur // 
// =============================================================================================================== //
function redirectToAjoutOpe() { // Lorsque l'utilisateur clique sur le bouton possédant l'attribut 'onclick="redirectToAjoutOpe()"'
  window.location.href = "ajout/ajoutOpe.html"; // On redirige l'utilisateur vers une autre page
}


// ============================================================================================== //
// Fonction permettant de rediriger vers la liste des opérateurs lors que l'on clique sur Annuler // 
// ============================================================================================== //
function redirectToListOpe() { // Lorsque l'utilisateur clique sur le bouton possédant l'attribut 'onclick="redirectToListOpe()"'
  window.location.href = "../rech_ope.html"; // On redirige l'utilisateur vers une autre page
}


// ===================================================================================================================== //
// Code permettant aux 3 div "card" de la page Dashboard (index.html) de rediriger vers un lien (une autre page du site) //
// ===================================================================================================================== //
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card"); // On sélectionne tous les éléments ayant la classe "card"
  cards.forEach((card) => { // On ajoute un gestionnaire d'événement de clic à chaque carte
    card.addEventListener("click", function () {
      const link = card.getAttribute("data-link"); // On récupère le lien contenu dans l'attribut data-link
      if (link) {
        window.location.href = link; // On redirige enfin vers le lien
      }
    });
  });
});


// ======================================================================================================== //
// Code permettant d'effectuer des recherches dans les tableau des pages "rech_act.html" et "rech_ope.html" //
// ======================================================================================================== //
const searchInput = document.getElementById('recherche-double');
const table = document.getElementById('table-aff');
const tbody = table.getElementsByTagName('tbody')[0];
const rows = tbody.getElementsByTagName('tr');

searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value.toLowerCase();
  let anyRowContainsSearch = false;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName('td');
    let rowContainsSearch = false;
    for (let j = 0; j < cells.length; j++) {
      const cellContent = cells[j].textContent.toLowerCase();
      if (cellContent.includes(searchValue)) {
        rowContainsSearch = true;
        anyRowContainsSearch = true;
        break;
      }
    }
    if (rowContainsSearch) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }
  if (!anyRowContainsSearch) { // Si aucune ligne ne correspond à la recheche -> On ajouter une ligne "Élement introuvable"
    const noResultsRow = tbody.insertRow();
    const cell = noResultsRow.insertCell();
    cell.textContent = 'Élément introuvable';
    cell.colSpan = rows[0].cells.length;
  }
  else { // On supprime cette ligne si des résultats sont trouvés
    const noResultsRow = tbody.querySelector('.no-results-row');
    if (noResultsRow) {
      tbody.removeChild(noResultsRow);
    }
  }
});


// ====================================================================================================================================== //
// Code permettant de filtrer la recherche de sous-activité en fonction de l'activité/la recherche d'opérateur en fonction du responsable //
// ====================================================================================================================================== //
function handleFilterChange() {
  filterTableActivite();
  filterTableResp();
}

document.getElementById('filtre').addEventListener('change', handleFilterChange);

function filterTableActivite() {
  const selectedActivity = document.getElementById('filtre').value.toLowerCase();
  const table = document.getElementById('table-aff');
  const tbody = table.getElementsByTagName('tbody')[0];
  const rows = tbody.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName('td');
    const activityCell = cells[2]; // L'indice 2 représente la colonne 3 (JavaScript est 0-indexé)

    if (selectedActivity === 'none' || activityCell.textContent.toLowerCase() === selectedActivity) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }
}

function filterTableResp() {
  const selectedResp = document.getElementById('filtre').value.toLowerCase();
  const table = document.getElementById('table-aff');
  const tbody = table.getElementsByTagName('tbody')[0];
  const rows = tbody.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName('td');
    const respCell = cells[7]; // L'indice 2 représente la colonne 3 (JavaScript est 0-indexé)

    if (selectedResp === 'none' || respCell.textContent.toLowerCase() === selectedResp) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }
}


// ======================================================================================================================
// Code permettant de trier les listes d'activités/d'opérateurs dans des ordres différents (croissant, alphabétique, etc)
// ======================================================================================================================

// ???


// ================================================================================================ //
// Code permettant de changer la couleur de l'avancement de la journée (critique, quasi-fini, fini) //
// ================================================================================================ //
document.addEventListener('DOMContentLoaded', function () {
  updateColor();  // Appelle la fonction pour mettre à jour la couleur initiale
});

function updateColor() {
  const rangeInputs = document.querySelectorAll('.rangeInput');
  rangeInputs.forEach(function (input) {
      const value = parseInt(input.value);
      const span = input.nextElementSibling;// On séléctionne l'élément voisin (le texte du <span> qui suit l'input)
      if (value <= 0) {                     // Si l'avancement est nul (égal à 0%) :
        span.classList.add('black');        // -> Couleur noire
      } else if (value <= 25) {             // Si l'avancement est inférieur ou égal à 25% :
        span.classList.add('red');          // -> Couleur rouge
      } else if (value <= 50) {             // Si l'avancement est inférieur ou égal à 50% :
        span.classList.add('chocolate');    // -> Couleur chocolat
      } else if (value <= 75) {             // Si l'avancement est inférieur ou égal à 75% :
        span.classList.add('orange');       // -> Couleur orange 
      } else if(value <= 85) {              // Si l'avancement est inférieur ou égal à 85% :
        span.classList.add('yellow');       // -> Couleur jaune
      } else if (value <= 99) {             // Si l'avancement est inférieur ou égal à 99% : 
        span.classList.add('light-green');  // -> Couleur verte claire
      } else if (value == 100) {            // Si l'avancement est égal à 100% :
        span.classList.add('green');        // -> Couleur verte
      } else {                              // Si l'avancement est supérieur à 100% :
        span.classList.add('blue');         // -> Couleur bleue
      }
  });
}


// =====================================================================================
// Fonction permettant d'afficher uniquement les opérateurs dont le contrat est en cours
// =====================================================================================
function filtrerDates() {
  const dateActuelle = new Date(); // On récupère la date actuelle
  const dateActuelleTimestamp = dateActuelle.getTime();

  const table = document.getElementById('table-aff'); // Récupération du tableau et des lignes
  const tbody = table.getElementsByTagName('tbody')[0];
  const lignes = tbody.getElementsByTagName('tr');

  for (let i = 0; i < lignes.length; i++) { // On parcours les lignes du tableau
    const ligne = lignes[i];
    const cellules = ligne.getElementsByTagName('td');
    const dateCellule = cellules[5].textContent.trim(); // 6ème colonne = index n°5

    if (dateCellule === "Indéterminée" || new Date(dateCellule) >= dateActuelleTimestamp) { // Si la date est "Indéterminée" ou si elle est supérieure ou égale à la date actuelle
      ligne.style.display = 'table-row'; // Soit on afficher la ligne
    } else {
      ligne.style.display = 'none'; // Soit on masque la ligne
    }
  }
}

document.addEventListener('DOMContentLoaded', filtrerDates); // Appel de la fonction lorsque le document est prêt