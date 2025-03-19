let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar nombre a la lista y al array
    amigos.push(nombre);

    // Crear elemento de lista
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el input
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${ganador} 🎉`;
    resultado.appendChild(li);
}