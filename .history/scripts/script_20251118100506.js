const BASE_URL = "https://jsonplaceholder.typicode.com";

const makereqest = document.querySelector("button");

makereqest.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
});

// GET

/*function getUsers() {
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
}*/

const newPost = {
  userId: 4,
  title: "Hello Post",
  body: "This is my first hello post",
};

function createPost() {
  return fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
