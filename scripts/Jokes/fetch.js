const apiUrl = "https://icanhazdadjoke.com/";

function newJoke() {
  const jokeText = document.querySelector(".joke-text");

  fetch(apiUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => (jokeText.innerHTML = data.joke))
    .catch((err) => console.log(err));

  const jokeRatingContainer = document.querySelector(".joke-rating-container");
  jokeRatingContainer.style.display = "none";
}
