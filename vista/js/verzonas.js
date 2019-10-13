var url = '../../controlador/fachada.php';

document.getElementById("btnMostrarModificar").addEventListener('click', function(){
    MostrarModificar();
})

document.getElementById("btnModificarEstado").addEventListener('click', function(){
    ModificarEstado();
})

document.getElementById("btnBuscarZona").addEventListener('click', function(){
    BuscarZona();
});

$("#Mostrar").hide();

function BuscarZona(){
    let ZonaBuscar = document.getElementById("BuscarZona");
    const data = new FormData();
    if(ZonaBuscar.value == ''){
        alert("campo vacio")
        return false;
    }
    else{
        data.append('oper', 'BuscarZona');
        data.append('clase', 'verzonas');
        data.append('codigo_zona', ZonaBuscar.value);
    }
    fetch(url, {
        method: 'POST', 
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        if(response == null){
            alert("No existe la zona");
        }else{
            var html ="<tr><th> codigo </th> <th> nombre </th> <th> region </th> <th> estado </th></tr>";
        response.forEach(element => {
            html += "<tr><td>"+ element.codigo_zona +" </td>" +"<td>"+ element.nombre_zona +" </td>" +"<td>"+ element.regiongeografica_zona +" </td>" 
            +"<td>"+ element.estado_zona +" </th></tr>"
        }
        
        );
           document.getElementById("tablazonas").innerHTML= (html);

        }
    });
}
  
function MostrarModificar(){
    let text = "";
    if($("#btnMostrarModificar").text() === "Modificar Estado"){
        $("#Mostrar").show();
        text = "Ocultar";
    }else{
        $("#Mostrar").hide();
        text = "Modificar Estado";
    }
    $("#btnMostrarModificar").html(text);
}

function ModificarEstado(){
    let CodigoZona = document.getElementById("BuscarZona");
    let EstadoCambio = document.getElementById("CambioEstado");
    const data = new FormData();

    if (CodigoZona.value == '' || EstadoCambio.value == ''){
        alert("El campo está vacio");
        return false;
    }else{
        data.append('oper', 'ModificarEstado');
        data.append('clase', 'verzonas');
        data.append('codigo_zona', CodigoZona.value);
        data.append('estado', EstadoCambio.value);
    }
    fetch(url, {
        method: 'POST',
        body: data,

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}