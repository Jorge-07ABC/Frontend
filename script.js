// Seleccionamos el campo de la contraseña y el icono del ojo mediante sus IDs
const passwordInput = document.getElementById('contrasena');
const togglePasswordIcon = document.getElementById('btn-toggle-password');

// Escuchamos el evento 'click' en el icono del ojo
togglePasswordIcon.addEventListener('click', function () {
    // Verificamos el tipo actual del input de contraseña
    if (passwordInput.type === 'password') {
        // Si está oculto, lo cambiamos a texto para mostrarlo
        passwordInput.type = 'text';
        
        // Cambiamos el icono a un ojo tachado (fa-eye-slash)
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        // Si está visible, lo volvemos a ocultar cambiando el tipo a password
        passwordInput.type = 'password';
        
        // Restauramos el icono al ojo normal (fa-eye)
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});