(function () {
  window.addEventListener("DOMContentLoaded", function (evt) {
    myCocktailsList = document.querySelector(".menu-list");
    myCocktailsList.addEventListener("click", function (evt) {
      let data = JSON.stringify({ id: Number(evt.target.dataset.id) });
      let myHeaders = new Headers({
        "Content-Type": "application/json",
      });
      fetch("/make", {
        method: "POST",
        body: data,
        headers: myHeaders,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log (response)
        });
    });
  });
})();

const socket = io();
socket.on("preparationStart", function(){
  console.log("la machine commence la préparartion du cocktail")
})
socket.on("preparationEnd", function(){
  console.log("la machine à terminé la préparartion du cocktail")
})
