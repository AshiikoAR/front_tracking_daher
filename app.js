let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");});}
			
		let sidebar = document.querySelector(".sidebar");
		let sidebarBtn = document.querySelector(".bx-menu");
        console.log(sidebarBtn);
		sidebarBtn.addEventListener("click", ()=>{sidebar.classList.toggle("close");});


function openPopup() {
	document.getElementById("accueil-popup").style.display = "block";
}
		
function closePopup() {
	document.getElementById("accueil-popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les éléments avec la classe "card"
    const cards = document.querySelectorAll(".card");

    // Ajoutez un gestionnaire d'événement de clic à chaque carte
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        // Récupérez le lien de l'attribut data-link
        const link = card.getAttribute("data-link");

        // Redirigez vers le lien
        if (link) {
          window.location.href = link;
        }
      });
    });
  });

  const searchInput = document.getElementById('recherche-effectif');
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
  
    // Ajouter une ligne spéciale si aucune ligne ne correspond à la recherche
    if (!anyRowContainsSearch) {
      const noResultsRow = tbody.insertRow();
      const cell = noResultsRow.insertCell();
      cell.textContent = 'Élément introuvable';
      cell.colSpan = rows[0].cells.length; // Définir la largeur de la cellule à la largeur du tableau
    }
    // Supprimer la ligne spéciale si des résultats sont trouvés
    else {
      const noResultsRow = tbody.querySelector('.no-results-row');
      if (noResultsRow) {
        tbody.removeChild(noResultsRow);
      }
    }
  });
  
  

function redirectToAjoutOpe() {
  // Redirige vers une autre page HTML
  window.location.href = "ajout/ajoutOpe.html";
}