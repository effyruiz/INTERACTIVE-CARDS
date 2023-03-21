// Obtener cada input de la pagina / capturar elementos
const dataInputs = document.querySelectorAll('[data-input]');

// a cada elemento o input se le va a asignar un evento que escuchara cada vez que cambie
dataInputs.forEach((input) => {
    input.addEventListener('input', (e) => changeCardValues(e));
});

// se va a llamar a una funcion que logre obtener el valor del input y agregar ese valor a otro elemento html 
function changeCardValues(e) {
    const inputID = e.currentTarget.id, inputValue = e.currentTarget.value;
    
    // Capturar el elemento o nodo cuyo contenido va a cambiar acorde a su data-target correspondiente
    const placeholderText = document.querySelector(`[data-field="${inputID}"]`);

    // CAmbiar el text interno del nodo o elmento html por el valor del input
    placeholderText.innerText = inputValue;
}