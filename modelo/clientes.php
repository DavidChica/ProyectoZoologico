<?php

class clientes{
    function AgregarCliente($param){
        extract($param);
        $sql = "INSERT INTO clientes(
            documento_cliente, nombre_cliente, apellido_cliente, edad_cliente, genero_cliente, numero_personas, numero_menores, descuento_personas, descuento_menores)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
             $rs = $conexion->getPDO()->prepare($sql);
             $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                 try{
                     $rs->execute(array($Documento, $Nombre, $Apellido, $Edad, $Genero, $NumeroPersonas, $Menores, $DescuentoPersonas, $DescuentoMenores));
                     $state = "Cliente añadido";
 
                     echo json_encode($state);
                 } 
                 catch (Exception $ex) {
                     $state = "Ha ocurrido un error al agregar el cliente" .$ex ;
 
                     echo json_encode($state);
                 }
    }

    function ListaClientes($param){
        extract($param);
        $sql = "SELECT * FROM clientes";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array())) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        
        echo json_encode(($array));
    }
}