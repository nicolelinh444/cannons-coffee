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
  let phone = dataObject.phone; 
  let comments = dataObject.comments; 
  let flavor = dataObject.flavor; 
  let interest = dataObject.interest; 

  let message = `Thank you, ${name}! We will be in contact with you soon at ${phone} and/or ${email}`;
  let contact = document.createElement("p");
  contact.textContent = message;
  container.appendChild(contact);
}