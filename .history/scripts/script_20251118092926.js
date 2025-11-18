const BASE_URL = "https://jsonplaceholder.typicode.com";

const makereqest = document.querySelector("button");

makereqest.addEventListener("click", () {
grtUsers();
})

// GET

function getUsers() {
  return fetch(`${BASE_URL}/users`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}