let users = [
    { "id":1, "name": "Camilo","apellido":"Mejia" ,"email": "mejia@exa.com", "cedula": "12345", "direccion":"Calle 45", "telefono":"311654","pais":"Colombia", "edad":"21"},
    { "id":2, "name": "Andres","apellido":"Lopez" ,"email": "alopez@exa.com", "cedula": "12456435", "direccion":"Calle 56", "telefono":"311654","pais":"Colombia", "edad":"17"},
    { "id":3, "name": "Cindy","apellido":"Ortega" ,"email": "cindyhazel@exa.com", "cedula": "326345825", "direccion":"Calle 425", "telefono":"311654","pais":"Colombia", "edad":"22" },
    { "id":4, "name": "Stephanie","apellido":"Riquett" ,"email": "fannyri@exa.com", "cedula": "4351223588", "direccion":"Calle 12", "telefono":"311654","pais":"Colombia", "edad":"18"},
    { "id":5, "name": "Jose","apellido":"Mejia" ,"email": "carde14@exa.com", "cedula": "235612345", "direccion":"Calle 89", "telefono":"311654","pais":"Colombia", "edad":"24" }
];

function addUserToJSON(user) {
    users.push(user);
}

function listUsers() {
    const userTable = document.getElementById('userTable');
    const tbody = userTable.querySelector('tbody');
    tbody.innerHTML = '';

    for (const user of users) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.apellido}</td>
            <td>${user.email}</td>
            <td>${user.cedula}</td>
            <td>${user.direccion}</td>
            <td>${user.telefono}</td>
            <td>${user.pais}</td>
            <td>${user.edad}</td>
        `;

        tbody.appendChild(row);
    }
}

const listUsersButton = document.getElementById('listUsers');
listUsersButton.addEventListener('click', listUsers);

const registrationForm = document.getElementById('registrationForm');
const modal = document.getElementById('myModal');
const modalMessage = document.getElementById('modalMessage');
const modalImage = document.getElementById('modalImage');
const closeModalButton = document.getElementById('closeModal');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const cedula = document.getElementById('cedula').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const pais = document.getElementById('pais').value;
    const edad = document.getElementById('edad').value;

    if ( /^\d+$/.test(id) && name && apellido &&  email && cedula && /^\d+$/.test(cedula) && direccion && telefono) {
        const newUser = {
        "id" : id,  
        "name": name, 
        "apellido": apellido, 
        "email": email, 
        "cedula": cedula, 
        "direccion": direccion, 
        "telefono": telefono,
        "pais": pais,
        "edad" : edad 
        };
        addUserToJSON(newUser);
        registrationForm.reset();
    } else {
        const errorMessage = 'Por favor, complete todos los campos';
        const errorImageSrc = "https://cdn.icon-icons.com/icons2/2715/PNG/512/x_circle_icon_172103.png"
        showModal(errorMessage, errorImageSrc);
    }
});

function showModal(message, imageSrc) {
    modalMessage.textContent = message;
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

closeModalButton.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

