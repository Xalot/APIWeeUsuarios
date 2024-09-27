$(document).ready(function() {
    // URL de la API
    const apiUrl = 'https://localhost:7055/api/Usuarios'; // Reemplaza puerto con el puerto de la API

    // Función para obtener los usuarios y mostrarlos en la lista
    function obtenerUsuarios() {
        $.ajax({
            url: apiUrl,
            type: 'GET',
            success: function(usuarios) {
                // Limpiar la lista antes de agregar los usuarios
                $('.list').empty();

                if (usuarios.length === 0) {
                    $('.list').append('<p>No hay usuarios registrados.</p>');
                } else {
                    usuarios.forEach(function(usuario) {
                        const inicial = usuario.nombreContacto.charAt(0).toUpperCase();

                        const listItem = `
                            <div class="list-item">
                                
                                <div class="flex">
                                    <span class="item-author">${usuario.nombreContacto}</span>
                                    <div class="item-except text-muted">
                                        <strong>Empresa:</strong> ${usuario.nombreEmpresa}
                                    </div>
                                    <div class="item-except text-muted">
                                        <strong>Correo:</strong> ${usuario.correoElectronico}
                                    </div>
                                    <div class="item-except text-muted">
                                        <strong>Teléfono:</strong> ${usuario.telefono}
                                    </div>
                                </div>
                            </div>
                        `;
                        $('.list').append(listItem);
                    });
                }
            },
            error: function(xhr, status, error) {
                console.error('Error al obtener los usuarios:', error);
                $('.list').append('<p>Error al obtener los usuarios.</p>');
            }
        });
    }

    // Llamar a la función para obtener los usuarios al cargar la página
    obtenerUsuarios();
});
