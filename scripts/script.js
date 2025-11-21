const overlay = document.querySelector(".overlay");

const dayForWeeks = document.querySelector("#dayForWeeks");
const dayAndTime = document.querySelector("#dayAndTime");

const all = document.querySelector(".all");
const aktiv = document.querySelector(".aktiv");
const end = document.querySelector(".end");
const check = document.querySelector("#check");
const check1 = document.querySelector("#check1");
const check2 = document.querySelector("#check2");

const toWork = document.querySelector(".toWork");
const toTheTaskItself = document.querySelector(".toTheTaskItself");
const check3 = document.querySelector("#check3");
const checkForTask = document.querySelector(".checkForTask");
const textForWork = document.querySelector(".textForWork");
const dataForTask = document.querySelector(".dataForTask");
const theTask = document.querySelector(".theTask");

const pensilButton = document.querySelector(".pensilButton");

const smalDisplay = document.querySelector(".smalDisplay");
const addBtn = document.querySelector(".addBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const creatWork = document.querySelector(".creatWork");

const message = document.querySelector(".message");

// взяла данные с localStorage в виде JSON
const task = JSON.parse(localStorage.getItem("task")) || [];

let currentEditIndex = null;

//########### выводим день и дату ##################

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

const reset = (arr1, arr2) => {
  //сначяло спрячем цвет и галочку в функцию чтоб потом повторить
  arr1.forEach((check) => {
    check.style.opacity = 0;
  });
  arr2.forEach((btn) => {
    btn.classList.remove("active");
  });
};
//функция при кликах для всех 3 кнопок
const putCheckMark = (element, ikonca, arr1, arr2) => {
  element.addEventListener("click", () => {
    //если нажата прячем
    if (ikonca.style.opacity === "1") {
      ikonca.style.opacity = 0;
      element.classList.remove("active");
    } else {
      //если спрятана иконка повторяем уже функцию
      reset(arr1, arr2);
      // показать
      ikonca.style.opacity = "1";
      element.classList.add("active");
    }
  });
};

putCheckMark(all, check, allCheckTogesrr, allButtons);
putCheckMark(aktiv, check1, allCheckTogesrr, allButtons);
putCheckMark(end, check2, allCheckTogesrr, allButtons);

//################## появляется 2 екран и прячеться кнопка и наоборот ###############

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
    creatWork.reset();
  });
};

clickChenchEkran(pensilButton, deleteBtn);

//################### Редактироввание 1 ####################

function addEditFeature(dateP, taskP, index) {
  [dateP, taskP].forEach((element) => {
    element.addEventListener("dblclick", () => {
      smalDisplay.classList.add("active");
      overlay.classList.add("active");

      creatWork.elements["date"].value = task[index].date;
      creatWork.elements["text"].value = task[index].toDo;

      currentEditIndex = index; //за ним будем редактир. нужн. елем
    });
  });
}

//################# Фильтрация ######################

function filtrWithButtons(butt1, butt2, butt3) {
  butt1.addEventListener("click", () => {
    textFromInput();
  });
  butt2.addEventListener("click", () => {
    toWork.innerHTML = "";
    task.forEach((element, index) => {
      if (!element.completed) newDivs(element.date, element.toDo, index);
    });
  });
  butt3.addEventListener("click", () => {
    toWork.innerHTML = "";
    task.forEach((element, index) => {
      if (element.completed) newDivs(element.date, element.toDo, index);
    });
  });
}
filtrWithButtons(all, aktiv, end);

//############# Функция для создания нового дива #############
// ####  При загрузке браузера ####
// ##### ОБРОБКА КЛиКа through ####
// #### Удаление текста #####
// #### функция для вывода текста в div ####

function newDivs(value1, value2, index) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("toTheTaskItself");

  newDiv.innerHTML = ` <button class="checkForTask">
            <span class="material-symbols-outlined" id="check3"> check </span>
          </button>
          <div class="textForWork">
            <p class="dataForTask"></p>
            <p class="theTask"></p>
            </div> 
            <button class="deleteTask"> 
              <span class="material-symbols-outlined" id="dump"> delete </span>
            </button>`;

  toWork.appendChild(newDiv);

  const dateP = newDiv.querySelector(".dataForTask");
  const taskP = newDiv.querySelector(".theTask");
  const checkButtNew = newDiv.querySelector(".checkForTask");
  const check3New = newDiv.querySelector("#check3");
  const deleteTask = newDiv.querySelector(".deleteTask");

  addEditFeature(dateP, taskP, index); //редактирование

  dateP.textContent = value1;
  taskP.textContent = value2;

  //---------------------При загрузке браузера оставалось------------//

  if (task[index].completed) {
    check3New.style.opacity = "1";
    checkButtNew.classList.add("active");
    dateP.style.textDecoration = "line-through";
    taskP.style.textDecoration = "line-through";
  }

  // -------------------- ОБРОБКА КЛиКа through--------------------//

  checkButtNew.addEventListener("click", () => {
    const visible = check3New.style.opacity === "1";

    if (visible) {
      check3New.style.opacity = "0";
      checkButtNew.classList.remove("active");
      dateP.style.textDecoration = "none";
      taskP.style.textDecoration = "none";
    } else {
      check3New.style.opacity = "1";
      checkButtNew.classList.add("active");
      dateP.style.textDecoration = "line-through";
      taskP.style.textDecoration = "line-through";

      task[index].completed = true;
    }
    localStorage.setItem("task", JSON.stringify(task));
  });

  // -------------  Удаление текста -------------//

  deleteTask.addEventListener("click", () => {
    // удалить с масива
    const token = task[index].token;
    const newTaskArray = task.filter((task) => {
      return task.token !== token;
    });
    //перезапустить localStorage
    task.length = 0;
    task.push(...newTaskArray);
    localStorage.setItem("task", JSON.stringify(task));
    // удалить с ДОМ
    newDiv.remove();

    textFromInput();
  });

  //----- функция для вывода текста в div ----------
}

//######## для всех елементов рендер запуск ##############
function textFromInput() {
  toWork.innerHTML = "";
  message.textContent = "";

  task.forEach((element, index) => {
    newDivs(element.date, element.toDo, index);
  });
}

//#####  текста в Input submit данные в localStorage
// ### Редактироввание 2 ####
creatWork.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskValueInput = event.target.elements["text"].value;
  const dateValueInput = event.target.elements["date"].value;

  //------ если инпуты пустые -------
  if (!taskValueInput || !dateValueInput) {
    message.textContent = "Заполни все поля!";
    return;
  }

  //------------ Редактироввание 2 --------------

  if (currentEditIndex !== null) {
    task[currentEditIndex].toDo = taskValueInput;
    task[currentEditIndex].date = dateValueInput;
    currentEditIndex = null;
  } else {
    // ----- добавляем с инпута данные в масив в localStorage --------
    task.push({
      toDo: taskValueInput,
      date: dateValueInput,
      token: Math.random().toString(36).substring(2),
      completed: false,
    });
  }

  localStorage.setItem("task", JSON.stringify(task));

  textFromInput();

  smalDisplay.classList.remove("active");
  overlay.classList.remove("active");
  pensilButton.classList.remove("active");
  creatWork.reset();
});

//##### задачи остаются при перезагрузке #####
document.addEventListener("DOMContentLoaded", () => {
  textFromInput();
});

//################# Поиск ########################
serchInput.addEventListener("input", () => {
  const valueFromSerchInput = serchInput.value.trim().toLowerCase();

  const filtrFromTask = task.filter((task) =>
    task.toDo.toLowerCase().startsWith(valueFromSerchInput)
  );

  toWork.innerHTML = "";
  filtrFromTask.forEach((task, index) => {
    newDivs(task.date, task.toDo, index);
  });
});

//     для себя что доработать 
//1. проблемы были с неправельным обращением к елементам. 
//2. забываю как подвязывать елементы то в ДОМ то localStorageю 
// 3. очень много проблем в синтаксисе. 
// 4. сразу не правильно построила архитектуру. Нужно сначало подумать что подвязать и где исползовать что б не было плутаницы в одной функции. 


