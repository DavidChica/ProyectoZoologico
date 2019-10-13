<?php

class veterinario{
    function AgregarVeterinario($param){
        extract($param);
        $sql = "INSERT INTO veterinario(
            cedula_veterinario, nombre_veterinario, apellido_veterinario, telefono_veterinario, email_veterinario, fechanacimiento_veterinario)
            VALUES(?, ?, ?, ?, ?, ?);";
            $rs = $conexion->getPDO()->prepare($sql);
            $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try{
                    $rs->execute(array($Cedula, $Nombre, $Apellido, $Telefono, $Email, $Nacimiento));
                    $state = "Veterinario agregado";

                    echo json_encode($state);
                } 
                catch (Exception $ex) {
                    $state = "ERROR" .$ex ;

                    echo json_encode($state);
                }
    }
}