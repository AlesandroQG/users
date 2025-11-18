const listaUsuarios = document.getElementById("listaUsuarios");

function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`No se ha podido obetener la información: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const users = data.map((user) => {
                return {
                    ...user,
                    age: randomAge(18, 65),
                    img: `../assets/img/${user.id}.jpeg`,
                    address: `${user.address.street + " " + user.address.suite + " " +  user.address.city}`,
                    company: user.company.name,
                };
            }).map((user) => {
                const { name, age, img, address, username, phone, email, company } = user;
                const template = `<li>
                    <div>
                        <ul>
                            <li><strong>Nombre:</strong> ${name}</li>
                            <li><strong>Edad:</strong> ${age}</li>
                            <li><strong>Username:</strong> ${username}</li>
                            <li><strong>Teléfono:</strong> ${phone}</li>
                            <li><strong>Email:</strong> ${email}</li>
                        </ul>
                        <img src="${img}" alt="persona">
                    </div>
                    <ul>
                        <li><strong>Compañía:</strong> ${company}</li>
                        <li><strong>Dirección:</strong> ${address}</li>
                    </ul>
                </li>`;
                return template;
            }).join("");
            listaUsuarios.innerHTML = users;
        })
        .catch((error) => {
            console.error(error);
            listaUsuarios.innerHTML = error;
        });
}

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

getUsers();

// const template = (usuario, edad) => {
//     return `<li>
//             <div>
//                 <ul>
//                     <li><strong>Nombre:</strong> ${usuario.name}</li>
//                     <li><strong>Edad:</strong> ${edad}</li>
//                     <li><strong>Username:</strong> ${usuario.username}</li>
//                     <li><strong>Teléfono:</strong> ${usuario.phone}</li>
//                     <li><strong>Email:</strong> ${usuario.email}</li>
//                 </ul>
//                 <img src="./assets/img/${usuario.id}.jpeg" alt="persona">
//             </div>
//             <ul>
//                 <li><strong>Compañía:</strong> ${usuario.company.name}</li>
//                 <li><strong>Dirección:</strong> ${usuario.address.street + " " + usuario.address.suite + " " +  usuario.address.city}</li>
//             </ul>
//         </li>`;
// };

// function getUsersOriginal() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`No se ha podido obetener la información: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             const estructura = data.map((usuario) => {
//                 const edad = Math.floor(Math.random() * (65 - 18 + 1) + 18);
//                 return template(usuario, edad);
//             }).join("");
//             listaUsuarios.innerHTML = estructura;
//         })
//         .catch((error) => {
//             console.error(error);
//             listaUsuarios.innerHTML = error;
//         });
// }
