<<<<<<< HEAD
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const btnCopiar = document.querySelector(".btnCopiar");
const campoTextoEntrada = document.querySelector(".campoTexto");
const campoTextoSalida = document.querySelector(".campoTextoSalida");
const btnTheme = document.querySelector(".btnTheme");
const alerta = document.querySelector(".alerta");

function encriptarTexto(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");



    return texto.toLowerCase();
}

function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto.toLowerCase();
}


btnEncriptar.addEventListener("click", function (event) {
    const textoEntrada = campoTextoEntrada.value.trim().toLowerCase();

    const textoValido = textoEntrada.replace(/[^a-z\s]/g, "");

    if (textoEntrada === textoValido && textoEntrada.length > 0) {
        const textoEncriptado = encriptarTexto(textoEntrada);
        campoTextoSalida.value = textoEncriptado;
        campoTextoEntrada.value = "";


    } else {
        campoTextoEntrada.value = "";
        campoTextoSalida.value = "";

        campoTextoSalida.placeholder = "Por favor, escribe un mensaje válido.";
    }
});

btnDesencriptar.addEventListener("click", function (event) {
    const textoEntrada = campoTextoEntrada.value.trim().toLowerCase();

    const textoValido = textoEntrada.replace(/[^a-z\s]/g, "");

    if (textoEntrada === textoValido && textoEntrada.length > 0) {
        const textoEncriptado = desencriptarTexto(textoEntrada);
        campoTextoSalida.value = textoEncriptado;

    } else {
        campoTextoEntrada.value = "";
        campoTextoSalida.value = "";
        campoTextoSalida.placeholder = "Por favor, escribe un mensaje válido.";

    }

});

function copiarTexto(event) {

    campoTextoSalida.select();
    navigator.clipboard.writeText(campoTextoSalida.value);

    alerta.innerText = "¡El texto ha sido copiado al portapapeles!";
    alerta.style.display = "block";


    setTimeout(function () {
        alerta.style.display = "none";
    }, 3000);

}

btnCopiar.addEventListener("click", copiarTexto);


//cambio de tema

function cambiarTema(event) {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

const themeButton = document.querySelector('.btnTheme');
themeButton.addEventListener("click", cambiarTema);

=======
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const btnCopiar = document.querySelector(".btnCopiar");
const campoTextoEntrada = document.querySelector(".campoTexto");
const campoTextoSalida = document.querySelector(".campoTextoSalida");
const alerta = document.querySelector(".alerta");

function encriptarTexto(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");



    return texto.toLowerCase();
}

function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto.toLowerCase();
}


btnEncriptar.addEventListener("click", function (event) {
    const textoEntrada = campoTextoEntrada.value.trim().toLowerCase();

    const textoValido = textoEntrada.replace(/[^a-z\s]/g, "");

    if (textoEntrada === textoValido && textoEntrada.length > 0) {
        const textoEncriptado = encriptarTexto(textoEntrada);
        campoTextoSalida.value = textoEncriptado;
        campoTextoEntrada.value = "";


    } else {
        campoTextoEntrada.value = "";
        campoTextoSalida.value = "";

        campoTextoSalida.placeholder = "Por favor, escribe un mensaje válido.";
    }
});

btnDesencriptar.addEventListener("click", function (event) {
    const textoEntrada = campoTextoEntrada.value.trim().toLowerCase();

    const textoValido = textoEntrada.replace(/[^a-z\s]/g, "");

    if (textoEntrada === textoValido && textoEntrada.length > 0) {
        const textoEncriptado = desencriptarTexto(textoEntrada);
        campoTextoSalida.value = textoEncriptado;

    } else {
        campoTextoEntrada.value = "";
        campoTextoSalida.value = "";
        campoTextoSalida.placeholder = "Por favor, escribe un mensaje válido.";

    }

});

function copiarTexto(event) {

    campoTextoSalida.select();
    navigator.clipboard.writeText(campoTextoSalida.value);

    alerta.innerText = "¡El texto ha sido copiado al portapapeles!";
    alerta.style.display = "block";


    setTimeout(function () {
        alerta.style.display = "none";
    }, 3000);

}

btnCopiar.addEventListener("click", copiarTexto);
>>>>>>> 14d31020684ca83e4c64a2d6084c4adca01cdfb5
