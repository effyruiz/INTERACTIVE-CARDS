/**
* RELLENAR LOS CAMPOS DE LAS TARJETAS
*/

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

/**
 * Validar formulario
 */

// Atrapar formulario en el DOM
const cardForm = document.querySelector('[data-form]');

// Agregar evento submit al formulario (formulario ha sido enviado)
cardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // OBTENER DEL E TARGET EL FORMULARIO QUE SE ESTA ENVIANDO
    const form = e.target;
    // OBTENER TODOS LOS INPUTS QUE ESTAN EN EL FORMULARIO
    const inputs = form.querySelectorAll('[data-input]');
    // BANDERA/FLAG PARA SABER SI EL FORMULARIO TIENE UN ERROR
    let formHasError = false;

    // VERIFICAR CADA INPUT
    inputs.forEach((i) => {
        // VERIFICAR SI EL INPUT ESTA VACIO
        if (!i.value) {
            // SI LO ESTA, BUSCAR AL PADRE CON (CLOSEST) INPUT-WRAPPER Y BUSCAR DENTRO DE EL, EL COMENTARIO DE ERROR Y QUITARLE LA CLASE QUE LO OCULTA
            i.closest('.input-wrapper').querySelector('.error').classList.remove('d-none');
            // ACTIVAR LA BANDERA/FLAG DE ERROR
            formHasError = true;
        // VERIFICAR SI EL INPUT SOLO DEBERIA TENER NUMEROS
        } else if (i.hasAttribute('data-only-number')) {
            // USAR UNA BANDERA PARA VER SI EL INPUT TIENE SOLO NUMEROS (BUSCAR: REGEX)
            const isNumber = /^\d+$/.test(i.value);
            // SI EL INPUT TIENE LETRAS
            if (!isNumber) {
                // SI TIENE, BUSCAR AL PADRE CON CLOSEST Y BUSCAR DENTRO EL MENSAJE DE ERROR PARA NUMEROS Y BORRAR LA CLASE QUE LO OCULTA
                i.closest('.input-wrapper').querySelector('.error-format').classList.remove('d-none');
                // ACTIVAR LA BANDERA/FLAG DE ERROR
                formHasError = true;
            }
        }
    });

    // SI EL FORMULARIO NO TIENE ERRORES MOSTRAR EL MENSAJE DE EXITO
    if (!formHasError) {
        continueMenu();
    }
});

// 1. OBTENER EL DOM ELEMENT DEL BOTON, LA LANDING PAGE Y EL MENU COMPLETED
const btnContinue = document.querySelector('[data-submit-button]');
const addedCard = document.querySelector('#input-flex-completed');
const landingPage = document.querySelector('.input-flex');

// 2. AGREGAR UNA CLASE PARA OCULTAR EL MENU COMPLETED CUANDO CARGA LA PAGINA
addedCard.classList.add('hide');

// 4. DESPUES DE HACE CLICK AL BOTON SE DEBERIA MOSTRAR/OCULTAR EL MENU DE COMPLETADO
function continueMenu() {
    // ocultar landing page
    landingPage.classList.add('hide');
    // mostrar texto de exito
    addedCard.classList.remove('hide');
}


