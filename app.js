// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();  // Elimina espacios innecesarios

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";  // Limpiar el campo de entrada
}

// Función para actualizar la lista en la pantalla
function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";  // Limpia la lista antes de actualizar

    listaAmigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let ganador = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${ganador}</strong></li>`;
}
