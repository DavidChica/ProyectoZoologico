var url = '../../controlador/fachada.php';
document.getElementById("btnAgregarZona").addEventListener('click', function(){
    AgregarZona();
});

function AgregarZona(){
    const data = new FormData();
    data.append('oper', 'AgregarZona');
    data.append('clase', 'zonas');
    data.append('Codigo', document.getElementById("CodigoZona").value);
    data.append('Nombre', document.getElementById("NombreZona").value);
    data.append('Region', document.getElementById("RegionGeografica").value);
    data.append('Estado', document.getElementById("EstadoZona").value);

    fetch(url, {
        method: 'POST',
        body: data,

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}