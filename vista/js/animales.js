var url = '../../controlador/fachada.php';

document.getElementById("btnAgregarAnimal").addEventListener('click', function(){
    AgregarAnimal();
});

function AgregarAnimal(){
    const data = new FormData();
    data.append('oper', 'AgregarAnimal');
    data.append('clase', 'animales');
    data.append('Codigo', document.getElementById("CodigoAnimal").value);
    data.append('Nombre', document.getElementById("NombreAnimal").value);
    data.append('Zona', document.getElementById("CodigoZona").value);
    data.append('Cientifico', document.getElementById("NombreCientifico").value);
    data.append('Genero', document.getElementById("GeneroAnimal").value);
    data.append('Nacimiento', document.getElementById("NacimientoAnimal").value);
    data.append('Llegada', document.getElementById("LlegadaAnimal").value);

    fetch(url, {
        method: 'POST',
        body: data,

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}