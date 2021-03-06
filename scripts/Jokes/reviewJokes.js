"use strict";

function reviewJokes() {
  const jokesArray = JSON.parse(localStorage.getItem("jokes-array"));

  const jokeId = document.querySelector(".joke__id");
  const jokeRating = document.querySelector(".joke__rating");
  const jokeText = document.querySelector(".joke__text");

  const deleteButton = document.querySelector(".delete__button");
  const previousNextButtons = document.querySelector(".previous-next-joke__button");


  if (jokesArray) {
    const joke = jokesArray[currentIndexAtJokesReview.index];
    jokeId.innerHTML = "Id: " + joke.id;
    jokeText.innerHTML = "Joke: " + joke.text;
    jokeRating.innerHTML = "Rating: " + joke.rating;
  } else {
    jokeId.innerHTML = "";
    jokeText.innerHTML = "No stored jokes";
    jokeRating.innerHTML = "";
    deleteButton.style.display = "none";
    previousNextButtons.style.display = "none";
  }
}
