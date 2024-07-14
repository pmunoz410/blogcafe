const data = {
    name: '',
    email: '',
    message: ''
}

const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const form = document.querySelector('.form')

name.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
message.addEventListener('input', leerTexto)

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // validar formulario
    const { name, email, message } = data;

    if(name === '' || email === '' || message === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    } 

    mostrarAlerta('Mensaje enviado correctamente');
    
})

function leerTexto(e){
    data[e.target.id] = e.target.value;
}

function mostrarAlerta(message, error = null) {
    const alert = document.createElement('P');
    alert.textContent = message;

    if(error) {
        alert.classList.add('error');
    } else {
        alert.classList.add('correct');
    }

    form.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 5000);
}