var url = '../../controlador/fachada.php';

document.getElementById("btnAgregarCita").addEventListener('click', function() {
    AgregarCita();
})

function AgregarCita() {

    const data = new FormData();
    data.append('oper', 'AgregarCita');
    data.append('clase', 'citas');
    data.append('CodigoA', document.getElementById("CodigoAnimal").value);
    data.append('NumeroC', document.getElementById("NumeroCita").value);
    data.append('Fecha', document.getElementById("FechaCita").value);
    data.append('Duracion', document.getElementById("DuracionCita").value);
  
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: data, // data can be `string` or {object}!

        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response));

}