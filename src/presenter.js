import obtenerMarcador from "./tennis.js";

const form = document.querySelector("#tennis-form");
const div = document.querySelector("#resultado-div");

let puntosJ1 = 0;
let puntosJ2 = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.submitter.id === "btn-j1") {
    puntosJ1++;
  } else if (event.submitter.id === "btn-j2") {
    puntosJ2++;
  }

  div.innerHTML = "<p>" + obtenerMarcador(puntosJ1, puntosJ2) + "</p>";
});

