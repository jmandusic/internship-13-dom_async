"use strict";

const logOutButton = document.querySelector(".log-out__button");
const deleteButtonDefault = document.querySelector(".delete__button");
const nextButton = document.querySelector(".next__button");
const previousButton = document.querySelector(".previous__button");
const closeButtonModalHeader = document.querySelector(".close__button");
const closeButtonModal = document.querySelector(".modal__button--close");
const deleteButtonModal = document.querySelector(".modal__button--delete");



logOutButton.addEventListener("click", () => {
  localStorage.removeItem("jokes-array");
  localStorage.removeItem("password");
  localStorage.removeItem("user-name");

  const jokeId = document.querySelector(".joke__id");
  const jokeRating = document.querySelector(".joke__rating");
  const jokeText = document.querySelector(".joke__text");
  const deleteButton = document.querySelector(".delete__button");
  const previousNextButtons = document.querySelector(".previous-next-joke__button");

  jokeId.innerHTML = "";
  jokeText.innerHTML = "No stored jokes";
  jokeRating.innerHTML = "";
  deleteButton.style.display = "none";
  previousNextButtons.style.display = "none";

  location.href = "../authentication.html";
});



deleteButtonDefault.addEventListener("click", () => {
  const actionConfirmationModal = document.querySelector(
    ".action-confirmation-modal"
  );
  const body = document.querySelector("body");

  actionConfirmationModal.style.display = "flex";
  body.style.backgroundColor = "rgba(0,0,0,0.65)";
});



nextButton.addEventListener("click", () => {
  const jokesArray = JSON.parse(localStorage.getItem("jokes-array"));
  const jokeId = document.querySelector(".joke__id");
  const jokeText = document.querySelector(".joke__text");
  const jokeRating = document.querySelector(".joke__rating");

  currentIndexAtJokesReview.index += 1;
  if (currentIndexAtJokesReview.index === jokesArray.length) {
    currentIndexAtJokesReview.index = 0;
  }
  const joke = jokesArray[currentIndexAtJokesReview.index];
  jokeId.innerHTML = "Id: " + joke.id;
  jokeText.innerHTML = "Joke: " + joke.text;
  jokeRating.innerHTML = "Rating: " + joke.rating;
});



previousButton.addEventListener("click", () => {
  const jokesArray = JSON.parse(localStorage.getItem("jokes-array"));
  const jokeId = document.querySelector(".joke__id");
  const jokeText = document.querySelector(".joke__text");
  const jokeRating = document.querySelector(".joke__rating");

  currentIndexAtJokesReview.index -= 1;
  if (currentIndexAtJokesReview.index === -1) {
    currentIndexAtJokesReview.index = jokesArray.length - 1;
  }
  const joke = jokesArray[currentIndexAtJokesReview.index];
  jokeId.innerHTML = "Id: " + joke.id;
  jokeText.innerHTML = "Joke: " + joke.text;
  jokeRating.innerHTML = "Rating: " + joke.rating;
});



closeButtonModalHeader.addEventListener("click", () => {
  const actionConfirmationModal = document.querySelector(
    ".action-confirmation-modal"
  );
  const body = document.querySelector("body");

  actionConfirmationModal.style.display = "none";
  body.style.backgroundColor = "#f1f3f6";
});



closeButtonModal.addEventListener("click", () => {
  const actionConfirmationModal = document.querySelector(
    ".action-confirmation-modal"
  );
  const body = document.querySelector("body");

  actionConfirmationModal.style.display = "none";
  body.style.backgroundColor = "#f1f3f6";
});



deleteButtonModal.addEventListener("click", () => {
  let jokesArray = JSON.parse(localStorage.getItem("jokes-array"));
  const actionConfirmationModal = document.querySelector(
    ".action-confirmation-modal"
  );
  const body = document.querySelector("body");

  const jokeId = document.querySelector(".joke__id");
  const jokeText = document.querySelector(".joke__text");
  const jokeRating = document.querySelector(".joke__rating");

  jokesArray.splice(currentIndexAtJokesReview.index, 1);
  localStorage.setItem("jokes-array", JSON.stringify(jokesArray));

  let joke = jokesArray[currentIndexAtJokesReview.index - 1];
  if (currentIndexAtJokesReview.index === 0) {
    joke = jokesArray[jokesArray.length - 1];
    currentIndexAtJokesReview.index = jokesArray.length - 1;
  } else {
    currentIndexAtJokesReview.index -= 1;
  }

  jokeId.innerHTML = "Id: " + joke.id;
  jokeText.innerHTML = "Joke: " + joke.text;
  jokeRating.innerHTML = "Rating: " + joke.rating;

  actionConfirmationModal.style.display = "none";
  body.style.backgroundColor = "#f1f3f6";
});
