var url = '../../controlador/fachada.php';

document.getElementById("btnAgregarTrabajador").addEventListener('click', function(){
    AgregarTrabajador();
});

function AgregarTrabajador(){
    const data = new FormData();
    data.append('oper', 'AgregarTrabajador');
    data.append('clase', 'trabajadores');
    data.append('Cedula', document.getElementById("CedulaTrabajador").value);
    data.append('Codigo', document.getElementById("CodigoTrabajador").value);
    data.append('Nombre', document.getElementById("NombreTrabajador").value);
    data.append('Apellido', document.getElementById("ApellidoTrabajador").value);
    data.append('Nacimiento', document.getElementById("FechaNacimientoTrabajador").value);
    data.append('Telefono', document.getElementById("TelefonoTrabajador").value);
    data.append('CodigoZ', document.getElementById("CodigoZona").value);

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}