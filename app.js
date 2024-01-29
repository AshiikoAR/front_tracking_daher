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

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#footer").style.position = "sticky";
});
