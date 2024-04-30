const addToDoButton = document.querySelector('.add-todo-button');
const newToDoInput = document.querySelector('.add-todo-input');
const todosList = document.querySelector('.todos-list');
const addTodoError = document.querySelector('.add-todo-error');
const contorizator = document.querySelector('.contorizator');
const enterTask = document.querySelector('.add-todo-input-container');

let todoArray = [];

const addToDo = () => {
  // luam textul din input
  const newToDo = newToDoInput.value.trim();
  // "  " -> "" 

  // reset input
  newToDoInput.value = '';


  if (newToDo.length === 0) {
    // afisam mesajul de eroare
    addTodoError.style.display = "block";

    // return; // dand return functia se opreste aici si nu merge mai departe - aici gen nu mai creeaza Delete butoane in continuu
  } else {
    //ascundem mesajul de eroare
    addTodoError.style.display = "none";

     // cream noul list item
    const newToDoContainer = document.createElement("li");

    newToDoContainer.innerHTML = `
      <div class="checkbox">
        <input type="checkbox" class="todo-checkbox">
        <p class="todo-text">  ${newToDo}  </p>
      </div>
      <button class="delete-todo"> X </button>
    `;

    newToDoContainer.style.borderBottom = "1px solid #3d3d3d";
    newToDoContainer.style.padding = "20px";
  
    // adaugam list item-ul in lista de todo-uri
    todosList.appendChild(newToDoContainer);

    todoArray.push(newToDo);

    contorizator.innerText = `Your TODO's number is: ${todoArray.length}`;

    // delete button
    const deleteButton = newToDoContainer.querySelector(".delete-todo");
    const todoCheckbox = newToDoContainer.querySelector(".todo-checkbox");

    const deleteToDo = () => {
      todosList.removeChild(newToDoContainer);
      todoArray.splice(todoArray.length-1);
      contorizator.innerText = `Your TODO's number is: ${todoArray.length}`;
    };

    const strikeThrough = () => {
      const todoText = newToDoContainer.querySelector("p");
      todoText.style.textDecoration = todoCheckbox.checked ? "line-through" : "none";
    };

    deleteButton.addEventListener("click", deleteToDo);
    todoCheckbox.addEventListener("change", strikeThrough);
  }

  // ---- Enter Task ----
  const placeTask = (e) => {
    e.preventDefault();
    addToDo();
  };
   enterTask.addEventListener('submit', placeTask);

   newToDoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addToDo();
    }
   });
};
addToDo()
// addToDoButton.addEventListener('click', addToDo);




// sa se creeze o functie care primeste ca parametru un string
// functia sa returneze true daca stringul este format din spatii
// in caz contrar false

// const checkIfStringCOntainsOnlyWhiteSpaces = (inputValue) => {
//   let numberOfWhiteSpaces = 0;

//   for (let i = 0; i < inputValue.length; i++) {
//     if (inputValue[i] === ' ') {
//       numberOfWhiteSpaces++;
//     }
//   }

//   if (numberOfWhiteSpaces === inputValue.length) {
//     return true;
//   } else {
//     return false;
//   }
// };

const checkIfStringCOntainsOnlyWhiteSpaces = (inputValue) => {
  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] !== ' ') {
      return false;
    }
  }
};