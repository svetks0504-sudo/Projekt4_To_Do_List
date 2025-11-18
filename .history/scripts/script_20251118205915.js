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
const check = document.querySelector("#check");
const check1 = document.querySelector("#check1");
const check2 = document.querySelector("#check2");

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

// при нажатии кнопки появляется или прячеться галочка

//сначяло спрячем
const allCheckTogesrr = [check, check1, check2];
allCheckTogesrr.forEach((check) => {
  check.style.opacity = 0;
});

//функция при кликах для всех кнопок
const putCheckMark = (element, ikonca) => {
  element.addEventListener("click", () => {
    //если нажата прячем
    if (ikonca.style.opacity === "1") {
      ikonca.style.opacity = 0;
    } else {
      //если спрятана иконка
      allCheckTogesrr.forEach((arr) => {
        arr.style.opacity = "0";
      });
      // показать
      ikonca.style.opacity = "1";
    }
  });
};

putCheckMark(all, check);
putCheckMark(aktiv, check1);
putCheckMark(end, check2);
