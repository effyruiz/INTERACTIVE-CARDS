// Codigo de stefanny

// PASOS PARA El CONTINUE

// 1. OBTENER EL DOM ELEMENT DEL BOTON, LA LANDING PAGE Y EL MENU COMPLETED
const btnContinue = document.querySelector('[data-submit-button]');
const addedCard = document.querySelector('#input-flex-completed');
const landingPage = document.querySelector('.input-flex');

// 2. AGREGAR UNA CLASE PARA OCULTAR EL MENU COMPLETED CUANDO CARGA LA PAGINA
addedCard.classList.add('hide');


// 3. AGREGAR UN EVENTO AL BOTON DOM CADA VEZ QUE SE HACE CLICK A EL
btnContinue.addEventListener('click', (e) => continueMenu(e));

// 4. DESPUES DE HACE CLICK AL BOTON SE DEBERIA MOSTRAR/OCULTAR EL MENU DE COMPLETADO
function continueMenu(e) {
    e.preventDefault();
    // ocultar landing page
    landingPage.classList.add('hide');
    // mostrar texto de exito
    addedCard.classList.remove('hide');
}

