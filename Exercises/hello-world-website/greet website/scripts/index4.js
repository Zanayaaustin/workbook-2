"use strict";

function greet() {
  const firstNameElement = document.getElementById("nameField");
  const messageParagrapghElement = document.getElementById("messageParagraph");
  const firstName = firstNameElement.value;
  let greeting = `Hello Beautiful ${firstName}`;
  messageParagrapghElement.innerText = greeting;
}
