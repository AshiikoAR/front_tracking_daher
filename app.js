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
const table = document.getElementById('table-resp');
const tbody = table.getElementsByTagName('tbody')[0];
const rows = tbody.getElementsByTagName('tr');

searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value.toLowerCase();

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName('td');
    let rowContainsSearch = false;

    for (let j = 0; j < cells.length; j++) {
      const cellContent = cells[j].textContent.toLowerCase();

      if (cellContent.includes(searchValue)) {
        rowContainsSearch = true;
        break;
      }
    }

    if (rowContainsSearch) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }
});


function trierTableau() {
  var selectElement = document.getElementById('triListeOpe');
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  var tableau = document.getElementById('table-resp');
  var tbody = tableau.querySelector('tbody');
  var lignes = [].slice.call(tbody.querySelectorAll('tr'));

  lignes.sort(function (a, b) {
      var aValue, bValue;

      switch (selectedOption) {
          case '1':
              aValue = a.cells[1].textContent;
              bValue = b.cells[1].textContent;
              break;
          case '2':
          case '3':
              aValue = parseInt(a.cells[0].textContent, 10);
              bValue = parseInt(b.cells[0].textContent, 10);
              break;
          case '4':
          case '5':
              aValue = parseInt(a.cells[2].textContent, 10);
              bValue = parseInt(b.cells[2].textContent, 10);
              break;
          case '6':
          case '7':
              aValue = parseFloat(a.cells[3].textContent);
              bValue = parseFloat(b.cells[3].textContent);
              break;
          default:
              break;
      }

      if (selectedOption === '2' || selectedOption === '4' || selectedOption === '6') {
          return aValue - bValue;
      } else {
          return bValue - aValue;
      }
  });

  tbody.innerHTML = '';
  lignes.forEach(function (ligne) {
      tbody.appendChild(ligne);
  });
}


function redirectToAjoutOpe() {
  // Redirige vers une autre page HTML
  window.location.href = "ajout/ajoutOpe.html";
}

