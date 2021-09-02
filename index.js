const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

//Afficher le contenu de chaque bouton au clic 
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

//Calculer le résultats des chiffres entrés
equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent); //eval() calcule toutes les données passées dedans
});

//Remettre la culculatrice à zéro
clear.addEventListener("click", () => {
  result.textContent = "";
});