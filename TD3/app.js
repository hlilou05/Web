function defTitre1() {
    const titreElement = document.getElementById("titre");
    document.title = titreElement.textContent;
}
//window.onload = defTitre1;
function defTitre2() {

    const premiereH2 = document.querySelector("h2");
    if (premiereH2) {
        document.title = premiereH2.textContent;
    }
}
//window.onload = defTitre2;
function defTitre3() {
    const balisesH2 = document.querySelectorAll("h2");
    if (balisesH2.length > 0) {
        const derniereH2 = balisesH2[balisesH2.length - 1];
        document.title = derniereH2.textContent;
    } else {
        document.title = "Hlilou Mohamed";
    }
}
//window.onload = defTitre3;
function defTitre4() {
    const elementsFirstOrLast = document.querySelectorAll(".firstOrLast");
    const nombreElements = elementsFirstOrLast.length;
    if (nombreElements > 0) {
        const titreElement = (nombreElements % 2 === 0) ? elementsFirstOrLast[0] : elementsFirstOrLast[nombreElements - 1];
        document.title = titreElement.textContent;
    } else {
                document.title = "Hlilou Mohamed";
    }
}
//window.onload = defTitre4
function inverseTexte() {
    const texteDiv1 = document.querySelector("#div1 p").textContent;
    const texteDiv2 = document.querySelector("#div2 p").textContent;
    document.querySelector("#div1 p").textContent = texteDiv2;
    document.querySelector("#div2 p").textContent = texteDiv1;
}
//window.onload = inverseTexte;
function datemodif() {
    const dateModif = document.lastModified;
    const auteur = document.querySelector('meta[name="author"]').getAttribute("content");
    const divDateModif = document.getElementById("date_modif");
    divDateModif.textContent = "Dernière modification : " + dateModif + " par " + auteur;
}
window.onload = datemodif;
document.addEventListener("DOMContentLoaded", function() {
    const champTexte = document.getElementById("champTexte");

    champTexte.addEventListener("input", function() {
        const valeur = champTexte.value.trim();
        if (valeur === "") {
            champTexte.classList.remove("vert", "rouge");
            champTexte.classList.add("blanc");
        } else {
            if (!isNaN(valeur)) {
                champTexte.classList.remove("blanc", "rouge");
                champTexte.classList.add("vert");
            } else {
                champTexte.classList.remove("blanc", "vert");
                champTexte.classList.add("rouge");
            }
        }
    });
});
