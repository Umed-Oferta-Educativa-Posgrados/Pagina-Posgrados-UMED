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

    modal.style.display = "block";

    document.body.style.overflow = "hidden";

}


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