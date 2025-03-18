//Autor: Miguel Maximiliano Reducindo Bernal

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Iniciamos declarando una variable de tipo constante que se llama ¨amigos¨, para que no se modifique el valor que se almacene en esta. 

const amigos = [];

// Declaramos una funcion que se llama ¨agregarAmigo¨, la cual se encarga de agregar el nombre del amigo e incluso valida si el campo esta vacio.
//Ademas de que actualiza el campo una vez que se agrego al amigo para poder agregar mas nombres. 

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const amigo = inputAmigo.value.trim();
    if (amigo) {
        amigos.push(amigo);
        actualizarListaAmigos();
        inputAmigo.value = "";
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}
//Funcion que se encarga de limpiar el campo de agregar amigo, para agregar uno nuevo.
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Funcion que se encarga de lanzar el nombre del amigo ganador y valida si no existen regitros para el sorteo.

function realizarSorteo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para el sorteo.");
        return;
    }
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];
    document.getElementById("resultado").textContent = "El ganador del sorteo es: " + ganador;
}