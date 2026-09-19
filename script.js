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
// ===============================
// MODAL DE INFORMACIÓN
// ===============================

function abrirInformacion(programa) {

    const modal = document.getElementById("modalInformacion");
    const titulo = document.getElementById("tituloInformacion");

    const contenidoCienciasPenales =
        document.getElementById("contenidoCienciasPenales");

const contenidoAdministracionPublica =
    document.getElementById("contenidoAdministracionPublica");

const contenidoContribucionesFiscales =
    document.getElementById("contenidoContribucionesFiscales");

    const contenidoDerechoLaboral =
        document.getElementById("contenidoDerechoLaboral");

        const contenidoDerechoEmpresarial =
    document.getElementById("contenidoDerechoEmpresarial");

const contenidoEducacionAbierta =
    document.getElementById("contenidoEducacionAbierta");

const contenidoEducacion =
    document.getElementById("contenidoEducacion");

const contenidoGarantiasAmparo =
    document.getElementById("contenidoGarantiasAmparo");

const contenidoPsicopedagogia =
    document.getElementById("contenidoPsicopedagogia");

const contenidoLibreComercio =
    document.getElementById("contenidoLibreComercio");

const contenidoSistemasCalidad =
    document.getElementById("contenidoSistemasCalidad");

const contenidoDerechoProcesalPenal =
    document.getElementById("contenidoDerechoProcesalPenal");

const contenidoDerechoProcesalCivil =
    document.getElementById("contenidoDerechoProcesalCivil");    

const contenidoDoctoradoEducacion =
    document.getElementById("contenidoDoctoradoEducacion");

const contenidoDoctoradoDerechoConstitucional =
    document.getElementById("contenidoDoctoradoDerechoConstitucional");

const contenidoDoctoradoCienciasForenses =
    document.getElementById("contenidoDoctoradoCienciasForenses");

    const botonSolicitar =
        document.getElementById("botonSolicitarInformacion");


    // Cambiar título
    titulo.textContent = programa;


    // Ocultar todos los contenidos
contenidoCienciasPenales.style.display = "none";
contenidoDerechoLaboral.style.display = "none";
contenidoAdministracionPublica.style.display = "none";
contenidoContribucionesFiscales.style.display = "none";
contenidoDerechoEmpresarial.style.display = "none";
contenidoEducacionAbierta.style.display = "none";
contenidoEducacion.style.display = "none";
contenidoGarantiasAmparo.style.display = "none";
contenidoPsicopedagogia.style.display = "none";
contenidoLibreComercio.style.display = "none";
contenidoSistemasCalidad.style.display = "none";
contenidoDerechoProcesalPenal.style.display = "none";
contenidoDerechoProcesalCivil.style.display = "none";
contenidoDoctoradoEducacion.style.display = "none";
contenidoDoctoradoDerechoConstitucional.style.display = "none";
contenidoDoctoradoCienciasForenses.style.display = "none";

    // Mostrar el contenido correspondiente
    if (programa === "Maestría en Ciencias Penales") {

        contenidoCienciasPenales.style.display = "block";

    }

    if (programa === "Maestría en Derecho Laboral") {

        contenidoDerechoLaboral.style.display = "block";

    }

if (programa === "Maestría en Administración Pública Municipal") {

    contenidoAdministracionPublica.style.display = "block";

}

if (programa === "Maestría en Contribuciones Fiscales") {

    contenidoContribucionesFiscales.style.display = "block";

}
if (programa === "Maestría en Derecho Empresarial") {

    contenidoDerechoEmpresarial.style.display = "block";

}

if (programa === "Maestría en Educación Abierta y a Distancia") {

    contenidoEducacionAbierta.style.display = "block";

}

if (programa === "Maestría en Educación") {

    contenidoEducacion.style.display = "block";

}

if (programa === "Maestría en Garantías y Amparo") {

    contenidoGarantiasAmparo.style.display = "block";

}

if (programa === "Maestría en Psicopedagogía") {

    contenidoPsicopedagogia.style.display = "block";

}

if (programa === "Maestría en Libre Comercio y Facilitación Aduanera") {

    contenidoLibreComercio.style.display = "block";

}

if (programa === "Maestría en Sistemas de Calidad") {

    contenidoSistemasCalidad.style.display = "block";

}

if (programa === "Maestría en Derecho Procesal Penal y Juicios Orales") {

    contenidoDerechoProcesalPenal.style.display = "block";

}

if (programa === "Maestría en Derecho Procesal Civil y Juicio Oral Familiar") {

    contenidoDerechoProcesalCivil.style.display = "block";

}

if (programa === "Doctorado en Educación") {

    contenidoDoctoradoEducacion.style.display = "block";

}

if (programa === "Doctorado en Derecho Procesal Constitucional y Derechos Humanos") {

    contenidoDoctoradoDerechoConstitucional.style.display = "block";

}

if (programa === "Doctorado en Ciencias Forenses e Investigación Pericial") {

    contenidoDoctoradoCienciasForenses.style.display = "block";

}

    // Hacer que el botón abra el formulario
    botonSolicitar.onclick = function() {

        cerrarInformacion();
        abrirFormulario(programa);

    };


    // Mostrar modal
    modal.style.display = "flex";
}

function cerrarInformacion() {

    const modal = document.getElementById("modalInformacion");

    modal.style.display = "none";
}

// Cerrar al hacer clic fuera de la ventana
window.addEventListener("click", function(event) {

    const modal = document.getElementById("modalInformacion");

    if (event.target === modal) {
        cerrarInformacion();
    }

});
