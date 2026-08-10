// ===============================
// ELEMENTOS DEL MODAL
// ===============================

const modal = document.getElementById("modalFormulario");
const cerrar = document.querySelector(".cerrar");
const titulo = document.getElementById("tituloPrograma");


// ===============================
// ABRIR FORMULARIO
// ===============================

function abrirFormulario(programa){

    titulo.innerHTML = programa;

    document.getElementById("programaSeleccionado").value = programa;

    modal.style.display = "block";

    document.body.style.overflow = "hidden";

}

const URL_GOOGLE_SHEETS = "https://script.google.com/macros/s/AKfycbwBRKBwzB9vAQc-9mbSwUvycJioDEA-Y7w2XOmD4tx9FOvXSznqae4jmFNClDuHBjL-/exec";


const formulario = document.getElementById("formularioSolicitud");


formulario.addEventListener("submit", async function(event){

    event.preventDefault();

    const boton = formulario.querySelector(".botonFormulario");

    const datos = new FormData(formulario);

    boton.disabled = true;
    boton.textContent = "Enviando...";


    try {

        await fetch(URL_GOOGLE_SHEETS, {

            method: "POST",

            body: new URLSearchParams(datos),

            mode: "no-cors"

        });


        alert("¡Solicitud enviada correctamente! Un asesor se pondrá en contacto contigo.");

        formulario.reset();

        boton.disabled = false;
        boton.textContent = "Enviar solicitud";


    } catch (error) {

        console.error(error);

        alert("Ocurrió un error al enviar la solicitud. Por favor, inténtalo nuevamente.");

        boton.disabled = false;
        boton.textContent = "Enviar solicitud";

    }

});

// ===============================
// CERRAR CON LA X
// ===============================

cerrar.onclick = function(){

    modal.style.display = "none";

    document.body.style.overflow = "auto";

}


// ===============================
// CERRAR HACIENDO CLICK AFUERA
// ===============================

window.onclick = function(event){

    if(event.target == modal){

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    }

}


// ===============================
// EVITAR QUE EL FORMULARIO
// RECARGUE LA PÁGINA
// ===============================

document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("¡Gracias! Tu solicitud ha sido registrada.");

    modal.style.display = "none";

    document.body.style.overflow = "auto";

    this.reset();

});
