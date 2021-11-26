// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

let listeCourse = document.getElementById("listeCourse")
let liste = document.createElement('li');
articles.push("Chocolat", "Coca-Cola")
liste.innerHTML = articles ;
listeCourse.appendChild(liste);

let button = document.getElementById("button1");
let add = function () {
    let input1 = document.getElementById("input1").value;
    articles.push(input1);
    liste.innerHTML = articles;
    listeCourse.appendChild(liste);
}
button.addEventListener("click", add);

let supprimer = document.getElementById("button2");
supprimer.addEventListener("click", function () {
    articles.pop();
    liste.innerHTML = articles;
});





