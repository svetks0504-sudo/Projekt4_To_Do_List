//1 этап: верстка, 2 этап: добавление задачи, подключение к localstorage
//  3 этап: фильтрация, редактирование
//доп. функ: поиск, редактирование задачи(название, время)

// task(entity) {
//   id: String | Number, // Math.random() | Date.now()
//   title: String,
//   date: String | Number,
//   completed: Boolean // false
// }
/*const tasks = [
  {
    id: 1,
    title: "Learn React",
    data: "10:30 12.12.2025",
    completed: false,
  },
];*/
const dayForWeeks = document.querySelector("#dayForWeeks");
const dayAndTime = document.querySelector("#dayAndTime");
const all = document.querySelector(".all");
const aktiv = document.querySelector(".aktiv");
const end = document.querySelector(".end");
const buttonsForCheken = document.querySelector(".all, .aktiv, .end");

//выводим день и дату
const today = new Date();
const weekday = today.toLocaleDateString("ru-Ru", {
  weekday: "long",
});
dayForWeeks.textContent = weekday.charAt(0).toUpperCase() + weekday.slice(1);

dayAndTime.textContent = today.toLocaleDateString("ru-Ru", {
  day: "numeric",
  month: "long",
});

// при нажатии кнопки появляется галочка
const activButtons = buttonsForCheken.addEventListener("click", () => {});
