ScrollReveal().reveal('.banner', {delay: 200});
ScrollReveal().reveal('#llamado-accion', {delay: 500});
ScrollReveal().reveal('.portafolio', {delay: 500});
ScrollReveal().reveal('#servicios', {delay: 500});
ScrollReveal().reveal('#clientes', {delay: 500});
ScrollReveal().reveal('#formulario', {delay: 500});
ScrollReveal().reveal('#texto_formulario', {delay: 500});
ScrollReveal().reveal('#agndar_cita', {delay: 500});
ScrollReveal().reveal('#pie-pagina', {delay: 500});

const formulario = document.getElementById("agendar_cita");
const inputs = formulario.querySelectorAll("input, textarea");
const boton = document.getElementById("boton");

function validarFormulario() {
    // Verifica que todos los inputs tengan valor
    let vacios = Array.from(inputs).some(input => input.value.trim() === "");
    boton.disabled = vacios; // Si hay vacío → bloquea
}

// Detectar cambios en los inputs
inputs.forEach(input => {
    input.addEventListener("input", validarFormulario);
});

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita recargar la página
    Swal.fire({
        title: "Correo enviado con exito!",
        icon: "success",
        draggable: true
    });

      // Limpiar todos los campos
      formulario.reset();

      // Volver a bloquear el botón
      boton.disabled = true;
    });

