"use strict";

function setFormDisplay() {
  const registrationForm = document.querySelector(".form__registration");
  const loginForm = document.querySelector(".form__login");

  const userName = localStorage.getItem("user-name");
  const password = localStorage.getItem("password");

  if (userName && password) {
    registrationForm.style.display = "none";
    loginForm.style.display = "flex";
  }
}

function formRegistrationSubmit(form) {
  const userName = form.querySelector('input[name="user-name"]').value;
  const password = form.querySelector('input[name="password"]').value;
  const passwordRepeated = form.querySelector('input[name="password-repeated"]')
    .value;

  if (passwordRepeated === password) {
    localStorage.setItem("user-name", userName);
    localStorage.setItem("password", password);
    location.href = "pages/jokes.html";
  } else {
    alert("Wrong input");
  }
}

function formLoginSubmit(form) {
  const userName = form.querySelector('input[name="user-name"]').value;
  const password = form.querySelector('input[name="password"]').value;

  const userNameAtStorage = localStorage.getItem("user-name");
  const passwordAtStorage = localStorage.getItem("password");

  if (userName === userNameAtStorage && password === passwordAtStorage) {
    location.href = "pages/jokes.html";
  } else {
    alert("Wrong input");
  }
}
