import ehCpf from "./validaCPF.js";

const campoFormulario = document.querySelectorAll("[required]");

 campoFormulario.forEach((campo) => {
    
    campo.addEventListener ("click", () => validaCampo(campo));
    
 })

 function validaCampo(campo){
    if (campo.name == "cpf" && campo.value.length >= 11){
        ehCpf(campo);
    }
 }