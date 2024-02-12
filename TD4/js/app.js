
function somme() {
    var s = 0;
    var nombres = document.getElementsByName('nombre');
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i].checked) {
            s += parseInt(nombres[i].value);
        }
    }
    alert("La somme vaut " + s);
}
   function calculerMoyenne() {
    var total = 0;
    var nombreDeCasesCochees = 0;
    var nombres = document.getElementsByName('nombre');
    
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i].checked && !isNaN(parseInt(nombres[i].value))) {
            total += parseInt(nombres[i].value);
            nombreDeCasesCochees++;
        }
    }
    
    var moyenne = nombreDeCasesCochees > 0 ? total / nombreDeCasesCochees : 0;
    var moyenneResult = document.getElementById("moyenneResult");
    moyenneResult.innerText = "La moyenne vaut " + moyenne;
}
function creer() {
    var combien = parseInt(document.getElementById('combien').value);
    var checkboxesDiv = document.getElementById('checkboxes');
    checkboxesDiv.innerHTML = ''; // Effacer les anciennes checkboxes

    if (!isNaN(combien) && combien >= 1 && combien <= 100) {
        for (var i = 1; i <= combien; i++) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'nombre';
            checkbox.value = i;
            checkbox.id = 'checkbox' + i;

            var label = document.createElement('label');
            label.htmlFor = 'checkbox' + i;
            label.appendChild(document.createTextNode(i));

            checkboxesDiv.appendChild(checkbox);
            checkboxesDiv.appendChild(label);
            checkboxesDiv.appendChild(document.createElement('br'));
        }
    } else {
        alert("Veuillez entrer un nombre entre 1 et 100.");
    }
}
function inf() {
    var res = "",
    at, el, nd, all_attr;
    nd = document.getElementById('ma_div'); //node
    all_attr = nd.attributes;
    for (i = 0; i != all_attr.length; i++) {
    at = all_attr[i];
    res += 'ATTR: ' + at.nodeName + ' = "' + at.nodeValue + '"\n';
    }
    var enfants = nd.childNodes;
    for (i = 0; i != enfants.length; i++) {
    el = enfants[i];
    res += el.nodeName;
    if (el.nodeType == 3)
    res += ' = "' + el.nodeValue + '"\n';
    else
    res += " --\n";
    }
    resnode = document.createElement('div');
    body = document.getElementsByTagName('body')[0];
    body.appendChild(resnode);
    titlenode = document.createElement('h1');
    titlenode.appendChild(document.createTextNode('Ceci et le contenu de la div'));
    contentnode = document.createElement('pre');
    contentnode.appendChild(document.createTextNode(res));
    resnode.appendChild(titlenode);
    resnode.appendChild(contentnode);
   }
   function Ajouter() {
    var valeurAjout = document.getElementById('ajout').value.trim(); // Trim pour supprimer les espaces avant et après
    if (valeurAjout !== '') {
        var listeCourses = document.getElementById('courses');
        var nouvelElement = document.createElement('li');
        nouvelElement.textContent = valeurAjout;
        listeCourses.appendChild(nouvelElement);
    } else {
        alert('Veuillez entrer une valeur avant d\'ajouter.');
    }
}

function Retirer() {
    var listeCourses = document.getElementById('courses');
    var dernierElement = listeCourses.lastElementChild;
    if (dernierElement) {
        listeCourses.removeChild(dernierElement);
    } else {
        alert('La liste de courses est vide.');
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const bloc = document.getElementById('carre');

    function animer(e) {
        const deplacement = 10;
        switch(e.key) {
            case 'ArrowRight':
                bloc.style.left = parseInt(bloc.style.left) + deplacement + 'px';
                break;
            case 'ArrowLeft':
                bloc.style.left = parseInt(bloc.style.left) - deplacement + 'px';
                break;
            case 'ArrowUp':
                bloc.style.top = parseInt(bloc.style.top) - deplacement + 'px';
                break;
            case 'ArrowDown':
                bloc.style.top = parseInt(bloc.style.top) + deplacement + 'px';
                break;
        }
    }

    document.addEventListener('keydown', animer(e));
});