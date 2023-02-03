// const tareas = [
//   {
//     Titulo: "Aprender Js",
//     Estado: "Pendiente",
//   }
//   {
//     Titulo: "Aprender CSS",
//     Estado: "En Progreso",
//   }
// ]


function $(elementoDeHtml) {
  return document.querySelector(elementoDeHtml);
}

// window.addEventListener("load", () => {
//   /*modal*/
//   const $openButton = document.querySelector("#open-modal");
// const $containModal = document.querySelector(".contain-modal");
// const $closeButton = document.querySelector("#close-modal");


// /*contenedores*/
// const $containFilters = $ ".contain-filters";
// const $containTareas = $ ".containTareas";

window.addEventListener("load", () => {
  const $openButton = document.querySelector("#open-modal");
const $containModal = document.querySelector(".contain-modal");
const $closeButton = document.querySelector("#close-modal");

$openButton.addEventListener("click", (event) => {
  event.preventDefault();
  $containModal.classList.add("show-modal");
});
$closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  $containModal.classList.remove("show-modal");
});

$openButton.onClick = (event) => {
  event.preventDefault();
  $containModal.classList.add("show-modal");
};

})

// function paint (nodo, datos) {
//    nodo.innerHTML = "";
//    datos.forEach (tarea => {
//     nodo.innerHTML += 



//    })
// }
// const tareasPendientes = tareas.filter 

// })