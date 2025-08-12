const btn = document.getElementById("ingresar");
const formulario = document.getElementById("login");

btn.addEventListener("click", function() {
// Alternar entre oculto y visible
if (formulario.style.display === "none" || formulario.style.display === "") {
    formulario.style.display = "block";
}
});