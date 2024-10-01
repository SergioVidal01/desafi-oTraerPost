async function getPosts() {
    const postData = document.getElementById('post-data');
    postData.innerHTML = ''; // Limpiar el contenido previo

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Verificamos si la respuesta es correcta
        if (!response.ok) {
            throw new Error('Error en la red');
        }

        const posts = await response.json();

        // Crear una lista desordenada para mostrar los posts
        const ul = document.createElement('ul');

        // Mostrar los posts en la lista desordenada
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = `${post.title}: ${post.body}`;
            ul.appendChild(li);
        });

        postData.appendChild(ul); // Añadir la lista al div
    } catch (error) {
        // Manejo de errores
        console.error('Ha ocurrido un error:', error);
        postData.innerHTML = 'No se pudieron cargar los posts. Intente más tarde.';
    }
}