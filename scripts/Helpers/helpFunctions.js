"use strict";

function displayJokes() {
  const formSection = document.querySelector(".form-section");
  const jokesSection = document.querySelector(".jokes-section");
  const body = document.querySelector("body");

  formSection.style.display = "none";
  jokesSection.style.display = "flex";
  body.style.backgroundImage = "url('assets/Repeating-Triangles.svg')";
}
