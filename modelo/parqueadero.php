<?php

class parqueadero{
    function AgregarCarro($param){
        extract($param);
        $sql = "INSERT INTO parqueadero(
            matricula_carro, cedula_cliente, entrada_parqueadero)
            VALUES(?, ?, ?);";
            $rs = $conexion->getPDO()->prepare($sql);
            $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try{
                    $rs->execute(array($Matricula, $Cedula, $Entrada));
                    $state = "Vehículo ingresado ";

                    echo json_encode($state);
                } 
                catch (Exception $ex) {
                    $state = "ERROR AL REGISTRAR" .$ex ;

                    echo json_encode($state);
                }
        
    }

    function CalcularTarifa($param){
        extract($param);
        $sql = "SELECT entrada_parqueadero FROM parqueadero WHERE cedula_cliente = ?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($cedula_cliente))) {
            if ($filas = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($filas as $fila) {

                    $array[] = $fila;
                }
            }
        }
        echo json_encode(($array));
    }

    function Actualizar($param){
        extract($param);
        $sql = "UPDATE parqueadero SET salida_parqueadero='$salida', valor_parqueo='$valor', estado_pago='pagado' WHERE cedula_cliente=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($cedula_cliente))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
      
        echo json_encode(($array));

    }



}