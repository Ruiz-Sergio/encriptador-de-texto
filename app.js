const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
const secciones = document.querySelector("#seccion");

const matriz_code = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4
];

function encriptar(fraseEncriptada) {
    fraseEncriptada = fraseEncriptada.toLowerCase();
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseadesecriptada) {
    fraseadesecriptada = fraseadesecriptada.toLowerCase();
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseadesecriptada.includes(matriz_code[i][1])) {
            fraseadesecriptada = fraseadesecriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseadesecriptada;
}

function validarTexto(texto) {
    return /^[a-z]+$/.test(texto); // Verifica si el texto contiene solo letras minúsculas
}

function btnEncriptar() {
    const texto = campo_texto.value;
    if (!validarTexto(texto)) {
        alert("El texto solo debe contener letras minúsculas y sin caracteres especiales.");
        return;
    }
    const textoEncriptado = encriptar(texto);
    mostrarResultado(textoEncriptado);
}

function btnDesencriptar() {
    const texto = campo_texto.value;
    if (!validarTexto(texto)) {
        alert("El texto solo debe contener letras minúsculas y sin caracteres especiales.");
        return;
    }
    const textoDesencriptado = desencriptar(texto);
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(textoResultado) {
    const nuevoTextarea = document.createElement('textarea');
    nuevoTextarea.name = "campo-mensaje";
    nuevoTextarea.id = "campo-mensaje";
    nuevoTextarea.value = textoResultado;
    secciones.innerHTML = '';
    secciones.appendChild(nuevoTextarea);
}
