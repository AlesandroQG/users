const listaUsuarios = document.getElementById("listaUsuarios");

const template = (usuario, edad) => {
    return `<li>
            <div>
                <ul>
                    <li><strong>Nombre:</strong> ${usuario.name}</li>
                    <li><strong>Edad:</strong> ${edad}</li>
                    <li><strong>Username:</strong> ${usuario.username}</li>
                    <li><strong>Teléfono:</strong> ${usuario.phone}</li>
                    <li><strong>Email:</strong> ${usuario.email}</li>
                </ul>
                <img src="../assets/img/${usuario.id}.jpeg" alt="persona">
            </div>
            <ul>
                <li><strong>Compañía:</strong> ${usuario.company.name}</li>
                <li><strong>Dirección:</strong> ${usuario.address.street + " " + usuario.address.suite + " " +  usuario.address.city}</li>
            </ul>
        </li>`;
};

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`No se ha podido obetener la información: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const estructura = data.map((usuario) => {
            const edad = 20 + Math.floor(Math.random() * 80);
            return template(usuario, edad);
        }).join("");
        listaUsuarios.innerHTML = estructura;
    })
    .catch((error) => {
        console.error(error);
        listaUsuarios.innerHTML = error;
    });
