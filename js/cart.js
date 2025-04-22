let container = document.querySelector(".container");
let form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit() {
  event.preventDefault();

  const data = new FormData(event.target);

  const dataObject = Object.fromEntries(data.entries());

  console.log(dataObject);

  form.reset();

  let name = dataObject.name; 
  let email = dataObject.email; 
  let password = dataObject.pw;

  let message = `Welcome, ${name}! You are logged in!`;
  let contact = document.createElement("p");
  contact.textContent = message;
  container.appendChild(contact);
}