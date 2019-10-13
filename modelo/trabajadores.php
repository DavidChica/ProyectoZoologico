<?php
class trabajadores{
    function AgregarTrabajador($param){
        extract($param);
        $sql = "INSERT INTO trabajadores(
            cedula_trabajador, codigo_trabajador, nombre_trabajador, apellido_trabajador, fechanacimiento_trabajador, telefono_trabajador, codigo_zona)
            VALUES(?, ?, ?, ?, ?, ?, ?);";
            $rs = $conexion->getPDO()->prepare($sql);
            $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    try {
                        $rs->execute(array($Cedula, $Codigo, $Nombre, $Apellido, $Nacimiento, $Telefono, $CodigoZ ));
                          $state  = "Trabajador agregado";
                         
                        echo json_encode($state);
                     } catch (Exception $ex) {
                        //$state[0] = print_r($ex, 1);
                        $state = "Ocurrió un problema al intentar agregar el empleado" .$ex;
                        
                        echo json_encode($state);
                    }
    }
}