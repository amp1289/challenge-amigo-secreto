let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {

    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    
    // Validar que no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Actualizar la lista visible
    actualizarListaAmigos();
    
    // Limpiar el campo de entrada y darle foco
    inputAmigo.value = '';
    inputAmigo.focus();
    
    // Limpiar el resultado anterior si existe
    document.getElementById('resultado').innerHTML = '';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item'; 
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert('Por favor, agrega al menos un nombre a la lista.');
        return;
    }
    
    // Seleccionar un nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    let resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = ''; 
    
    let resultItem = document.createElement('li');
    resultItem.className = 'result-item';
    
    let resultTitle = document.createElement('h3');
    resultTitle.textContent = '¡Tu amigo secreto es!';
    resultTitle.className = 'result-title';
    
    let resultName = document.createElement('p');
    resultName.textContent = amigoSeleccionado;
    resultName.className = 'result-name';
   
    resultItem.appendChild(resultTitle);
    resultItem.appendChild(resultName);
    resultadoList.appendChild(resultItem);
    
}



