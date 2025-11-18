const BASE_URL = "https://jsonplaceholder.typicode.com";

const makereqest = document.querySelector("button");

makereqest.addEventListener("click", () {

})

// GET

function getUsers(){
    return futch(`${BASE_URL}/users`);
}