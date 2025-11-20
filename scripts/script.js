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
const overlay = document.querySelector(".overlay");
const dayForWeeks = document.querySelector("#dayForWeeks");
const dayAndTime = document.querySelector("#dayAndTime");
const all = document.querySelector(".all");
const aktiv = document.querySelector(".aktiv");
const end = document.querySelector(".end");
const check = document.querySelector("#check");
const check1 = document.querySelector("#check1");
const check2 = document.querySelector("#check2");
const check3 = document.querySelector("#check3");
const checkForTask = document.querySelector(".checkForTask");
const pensilButton = document.querySelector(".pensilButton");
const smalDisplay = document.querySelector(".smalDisplay");
const deleteBtn = document.querySelector(".deleteBtn");

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

const allCheckTogesrr = [check, check1, check2];
const allButtons = [all, aktiv, end];

//сначяло спрячем цвет и галочку в функцию чтоб потом повторить
const reset = (arr1, arr2) => {
  arr1.forEach((check) => {
    check.style.opacity = 0;
  });
  arr2.forEach((btn) => {
    btn.classList.remove("active");
  });
};
//функция при кликах для всех кнопок
const putCheckMark = (element, ikonca) => {
  element.addEventListener("click", () => {
    //если нажата прячем
    if (ikonca.style.opacity === "1") {
      ikonca.style.opacity = 0;
      element.classList.remove("active");
    } else {
      //если спрятана иконка повторяем уже функцию
      reset(allCheckTogesrr, allButtons);
      // показать
      ikonca.style.opacity = "1";
      element.classList.add("active");
    }
  });
};

putCheckMark(all, check);
putCheckMark(aktiv, check1);
putCheckMark(end, check2);

//при нажатии кнопки появляется или прячеться галочка p

//при нажатии кнопки появляется 2 екран и прячеться кнопка и наоборот при отмене

const clickChenchEkran = (openBtn, closeBtn) => {
  openBtn.addEventListener("click", () => {
    smalDisplay.classList.add("active");
    openBtn.classList.add("active");
    overlay.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    smalDisplay.classList.remove("active");
    openBtn.classList.remove("active");
    overlay.classList.remove("active");
  });
};

clickChenchEkran(pensilButton, deleteBtn);
