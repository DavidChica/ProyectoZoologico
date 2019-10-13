var url = '../../controlador/fachada.php';

document.getElementById("btnMostrarConsulta").addEventListener('click', function(){
    MostrarConssulta();
})

document.getElementById("btnCalcularTarifa").addEventListener('click', function(){
    CalcularTarifa();
})

document.getElementById("btnActualizar").addEventListener('click', function(){
    Actualizar();
})

document.getElementById("btnAgregarCarro").addEventListener('click', function(){
    AgregarCarro();
});

$("#Mostrar").hide();
function AgregarCarro(){
    const data = new FormData();
    data.append('oper', 'AgregarCarro');
    data.append('clase', 'parqueadero');
    data.append('Matricula', document.getElementById("MatriculaCarro").value);
    data.append('Cedula', document.getElementById("CedulaCliente").value);
    data.append('Entrada', document.getElementById("HoraEntrada").value);


    fetch(url, {
        method: 'POST',
        body: data,

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function MostrarConssulta(){
    let text = "";
    if($("#btnMostrarConsulta").text() === "Consultar Tarifa"){
        $("#Mostrar").show();
        text = "Ocultar este menú";
    }else{
        $("#Mostrar").hide();
        text = "Consultar Tarifa";
    }
    $("#btnMostrarConsulta").html(text);
}

var busqueda = document.getElementById("CedulaCliente2");
var Salida = document.getElementById("HoraSalida");

function CalcularTarifa(){
   var tarifa = 0;
const data = new FormData();
    if(busqueda.value == ''){
        alert("No ha ingresado un valor en la cédula");
    }else{
        data.append('oper', 'CalcularTarifa');
        data.append('clase', 'parqueadero');
        data.append('cedula_cliente', busqueda.value);
    }
    fetch(url, {
        method: 'POST',
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error: ', error))
    .then(response => {
        if(response == null){
            alert("No existe esta cédula");
        }else{
           response.forEach(element => {
               
           var operacion = parseInt(Salida.value) - parseInt(element.entrada_parqueadero);
            tarifa = parseInt(operacion) * 1500;
           
          
           });
           document.getElementById("Resultado").value = tarifa;
           
        }
    });
}


function Actualizar(){ 
    let input = document.getElementById("Resultado").value;
    
    const data = new FormData();
if(busqueda.value == ''){
    alert("El campo de cédula esta vacio");
}else{
    
    data.append('oper', 'Actualizar');
    data.append('clase', 'parqueadero');
    data.append('cedula_cliente', busqueda.value);
    data.append('salida', Salida.value);
    data.append('valor', input);
    fetch(url, {
        method: 'POST',
        body: data,

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        response = alert("Pago realizado");
    });    
}
}

