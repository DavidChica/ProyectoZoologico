<?php 

class citas{

    function Agregarcita($param){
        extract($param);
        $sql = "INSERT INTO citas(
            codigo_animal, numero_cita, fecha_cita, duracion_cita)
            VALUES (?, ?, ?, ?);";
             
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($CodigoA ,$NumeroC, $Fecha , $Duracioncita));
                      $state  = "Cita insertada correctamente" ;
                   
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al insertar la Cita" .$ex;
                    
                    echo json_encode($state);
                }

    }


}