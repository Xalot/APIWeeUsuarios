$(document).ready(function() {
    // Deshabilitar el botón al cargar la página
    $('#registroBtn').prop('disabled', true);

    // Función para validar el formulario
    function validarFormulario() {
        const nombreEmpresa = $('#NombreEmpresa').val().trim();
        const nombreContacto = $('#NombreContacto').val().trim();
        const correoElectronico = $('#CorreoElectronico').val().trim();
        const telefono = $('#Telefono').val().trim();
        const terminosAceptados = $('#terminosCheck').is(':checked');

        // Validar que todos los campos estén llenos
        if (nombreEmpresa && nombreContacto && correoElectronico && telefono && terminosAceptados) {
            // Validar que el correo electrónico sea válido
            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoElectronico);
            // Validar que el teléfono contenga solo dígitos
            const telefonoValido = /^\d+$/.test(telefono);

            if (emailValido && telefonoValido) {
                $('#registroBtn').prop('disabled', false);
            } else {
                $('#registroBtn').prop('disabled', true);
            }
        } else {
            $('#registroBtn').prop('disabled', true);
        }
    }

    // Eventos para validar en tiempo real
    $('#NombreEmpresa, #NombreContacto, #CorreoElectronico, #Telefono').on('input', validarFormulario);
    $('#terminosCheck').on('change', validarFormulario);

    // Manejar el envío del formulario
    $('#registroForm').on('submit', function(event) {
        event.preventDefault(); // Evitar el envío tradicional del formulario

        const usuario = {
            nombreEmpresa: $('#NombreEmpresa').val().trim(),
            nombreContacto: $('#NombreContacto').val().trim(),
            correoElectronico: $('#CorreoElectronico').val().trim(),
            telefono: $('#Telefono').val().trim()
        };

        $.ajax({
            url: 'https://localhost:7055/api/Usuarios', // URL de tu API
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(usuario),
            success: function(response) {
                // Mostrar el modal con SweetAlert2
                Swal.fire({
                    title: 'Datos guardados correctamente',
                    html: `
                        <p><strong>Nombre de la empresa:</strong> ${usuario.nombreEmpresa}</p>
                        <p><strong>Nombre de contacto:</strong> ${usuario.nombreContacto}</p>
                        <p><strong>Correo electrónico:</strong> ${usuario.correoElectronico}</p>
                        <p><strong>Teléfono:</strong> ${usuario.telefono}</p>
                    `,
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Redirigir al listado de usuarios
                        window.location.href = 'index.html';
                    }
                });
            },
            error: function(xhr, status, error) {
                console.error('Error al registrar el usuario:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Ocurrió un error al registrar el usuario',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    });
});
