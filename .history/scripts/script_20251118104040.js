//1.Сделайте запрос на https://jsonplaceholder.typicode.com.
//  Укажите path/route /comments. Далее укажите query параметр email
//  со значением Lew@alysha.tv

const commentsUrl =
  "https://jsonplaceholder.typicode.com/comments?email=Lew@alysha.tv";

fetch(commentsUrl)
.then((response)=>{
response.json()
})
.then((data) => {
console.log("comments:", data)
})
.catch((error)=> 7
console.log(erro)
//2.Сделайте запрос на https://jsonplaceholder.typicode.com.
//  Укажите path/route /users. Далее укажите query параметр username
//  со значением Karianne и id 4.


const usersUrl = "https://jsonplaceholder.typicode.com/users?username=Karianne&id=4";
