let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {

    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    
    
    // Vemos que no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Llamar a la función para mostrar los amigos
    mostrarAmigos();
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    inputAmigo.focus();
    
    // Limpiar el resultado anterior si existe
    document.getElementById('resultado').innerHTML = '';

}
// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {

    let lista = document.getElementById('listaAmigos');
    

    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
     
        let li = document.createElement('li');
        li.textContent = amigos[i];
        li.className = 'name-item';
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert('Por favor, agrega al menos un nombre a la lista.');
        return;
    }
    
    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // 3. Obtener el nombre sorteado
    let amigoSeleccionado = amigos[indiceAleatorio];
    
    // 4. Mostrar el resultado
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <li class="result-item">
            <h3 class="result-title">¡Tu amigo secreto es!</h3>
            <p class="result-name">${amigoSeleccionado}</p>
        </li>
    `;
    

}

    



