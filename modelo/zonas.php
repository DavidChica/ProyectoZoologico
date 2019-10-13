<?php

class zonas{
    function AgregarZona($param){
        extract($param);
        $sql = "INSERT INTO zonas(
            codigo_zona, nombre_zona, regiongeografica_zona, estado_zona)
            VALUES (?, ?, ?, ?);";
             $rs = $conexion->getPDO()->prepare($sql);
             $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                 try{
                     $rs->execute(array($Codigo, $Nombre, $Region, $Estado));
                     $state = "Zona añadida" .$Codigo ;
 
                     echo json_encode($state);
                 } 
                 catch (Exception $ex) {
                     $state = "Ha ocurrido un error al agregar la zona" .$ex ;
 
                     echo json_encode($state);
                 }
    }
}