var url = '../../controlador/fachada.php';

document.getElementById("btnAgregarVeterinario").addEventListener('click', function(){
    AgregarVeterinario();
});

function AgregarVeterinario(){
    const data = new FormData();
    data.append('oper', 'AgregarVeterinario');
    data.append('clase', 'veterinario');
    data.append('Cedula', document.getElementById("CedulaVeterinario").value);
    data.append('Nombre', document.getElementById("NombreVeterinario").value);
    data.append('Apellido', document.getElementById("ApellidoVeterinario").value);
    data.append('Telefono', document.getElementById("TelefonoVeterinario").value);
    data.append('Email', document.getElementById("CorreoVeterinario").value);
    data.append('Nacimiento', document.getElementById("FechaNacimiento").value);

    fetch(url, {
        method: 'POST',
        body: data,

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}