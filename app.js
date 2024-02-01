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


// ==================================================================================================================== //
// Fonction peremettant de rediriger vers la page d'ajout d'opérateur lors que celui-ci clique sur Ajouter un opérateur // 
// ==================================================================================================================== //
function redirectToAjoutOpe() { // Lorsque l'utilisateur clique sur le bouton possédant l'attribut 'onclick="redirectToAjoutOpe()"'
  window.location.href = "ajout/ajoutOpe.html"; // On redirige l'utilisateur vers une autre page

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


// ==================================================================================================== //
// Code permettant de filtrer les résultat de recherche de sous-activité en fonction du type d'activité //
// ==================================================================================================== //
document.getElementById('activites').addEventListener('change', function () {
  filterTableActivite();
});

function filterTableActivite() {
  const selectedActivity = document.getElementById('activites').value.toLowerCase();
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


// ================================================================================================ //
// Code permettant de filtrer les résultat de recherche d'opérateurs en fonction du type d'activité //
// ================================================================================================ //
document.getElementById('responsable').addEventListener('change', function () {
  filterTableResp();
});

function filterTableResp() {
  const selectedActivity = document.getElementById('responsable').value.toLowerCase();
  const table = document.getElementById('table-aff');
  const tbody = table.getElementsByTagName('tbody')[0];
  const rows = tbody.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName('td');
    const activityCell = cells[7]; // L'indice 7 représente la colonne 8 (JavaScript est 0-indexé)

    if (selectedActivity === 'none' || activityCell.textContent.toLowerCase() === selectedActivity) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }
}