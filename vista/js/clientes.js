var url = '../../controlador/fachada.php';

document.getElementById("btnListaClientes").addEventListener('click', function(){
    ListaClientes();
})
document.getElementById("btnAgregarCliente").addEventListener('click', function(){
    AgregarCliente();
});

function AgregarCliente(){
let Personas = document.getElementById("Personas").value;
let Menores = document.getElementById("Menores").value;

var DesPersonas = 0;
var DesMenores = 0;
if(Personas >= 5){
    alert("Al ingresar mas de 5 personas, tiene un descuento del 20%");
    DesPersonas =  20;
}else{
    DesPersonas = 0;
}

if(Menores > 0){
    alert("Al tener ingreso de Menores, estos pagarán el 50% del precio");
    DesMenores = 50;
}else{
    DesMenores = 0;
}

if(Menores > Personas){
    alert("Problema con el ingreso de personas y menores");
    return false;
}else{
    const data = new FormData();
    data.append('oper', 'AgregarCliente');
    data.append('clase', 'clientes');
    data.append('Documento', document.getElementById("DocumentoCliente").value);
    data.append('Nombre', document.getElementById("NombreCliente").value);
    data.append('Apellido', document.getElementById("ApellidoCliente").value);
    data.append('Edad', document.getElementById("GeneroCliente"));
    data.append('Genero', document.getElementById("GeneroCliente"));
    data.append('NumeroPersonas', Personas);
    data.append('Menores', Menores);
    data.append('DescuentoPersonas', DesPersonas);
    data.append('DescuentoMenores', DesMenores);

    fetch(url, {
        method: 'POST',
        body: data,

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}
}

function ListaClientes(){
    const data = new FormData();
    data.append('oper', 'ListaClientes');
    data.append('clase', 'clientes')

    fetch(url, {
        method: 'POST', 
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
            var html ="<tr><th> cedula </th> <th> nombre </th> <th> apellido </th> <th> edad </th> <th> genero </th> <th> Personas que ingresan </th><th> Personas Menores </th><th>Descuento por personas</th><th>Descuento por Menores</th></tr>";
        response.forEach(element => {
            html += "<tr><th>"+ element.documento_cliente +" </th>" +"<th>"+ element.nombre_cliente +" </th>" +"<th>"+ element.apellido_cliente +" </th>" 
            +"<th>"+ element.edad_cliente +" </th>" +"<th>"+ element.genero_cliente +" </th>" +"<th>"+ element.numero_personas +" </th>"
            +"<th>"+ element.numero_menores +" </th>" + "<th>" + element.descuento_personas + "</th>" + "<th>" + element.descuento_menores + "</th></tr>"
        }
        
        );
           document.getElementById("Lista").innerHTML= (html);

        
    });
}