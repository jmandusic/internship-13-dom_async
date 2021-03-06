"use strict";

function getJokeClickHandler() {
  const jokesContainer = document.querySelector(".get-joke-container");
  const reviewJokesContainer = document.querySelector(
    ".review-jokes-container"
  );

  jokesContainer.style.display = "flex";
  reviewJokesContainer.style.display = "none";
}

function reviewJokesClickHandler() {
  const jokesContainer = document.querySelector(".get-joke-container");
  const jokeRatingContainer = document.querySelector(".joke-rating-container");
  const reviewJokesContainer = document.querySelector(
    ".review-jokes-container"
  );
  jokesContainer.style.display = "none";
  jokeRatingContainer.style.display = "none";
  reviewJokesContainer.style.display = "flex";
}

function saveJoke() {
  const jokeRatingContainer = document.querySelector(".joke-rating-container");
  jokeRatingContainer.style.display = "flex";
}

function submitJokeRating(joke) {
  let jokesArray = JSON.parse(localStorage.getItem("jokes-array"));
  console.log(jokesArray);
  if (!jokesArray) {
    jokesArray = [];
  }

  const jokeId = autoIncrement(jokesArray);
  const jokeText = document.querySelector(".joke-text").innerHTML;
  const jokeRating = joke.querySelector('input[name="joke-rating"]').value;

  const jokeObject = {
    id: jokeId,
    text: jokeText,
    rating: jokeRating,
  };

  jokesArray.push(jokeObject);
  sortJokesArray(jokesArray);
  localStorage.setItem("jokes-array", JSON.stringify(jokesArray));

  alert("Joke sucessfully saved !!!");
  newJoke();

  const deleteButton = document.querySelector(".delete__button");
  const previousNextButtons = document.querySelector(
    ".previous-next-joke__button"
  );

  deleteButton.style.display = "none";
  previousNextButtons.style.display = "none";
}
