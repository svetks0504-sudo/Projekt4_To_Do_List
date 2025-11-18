const BASE_URL = "https://jsonplaceholder.typicode.com";

const makereqest = document.querySelector("button");

makereqest.addEventListener("click", () {
grtUsers();
})

// GET

function getUsers(){
    return futch(`${BASE_URL}/users`)
    .then((response) 
=> {
    return response.json();
})
.then ((data)=>{
    console.log(data);
})
.catch(()=>{});
}