<?php

class animales{
    function AgregarAnimal($param){
        extract($param);
        $sql = "INSERT INTO animales(
            codigo_animal, nombre_animal, codigo_zona, nombrecientifico_animal, genero_animal, fechanacimiento_animal, fechallegada_animal)
            VALUES (?, ?, ?, ?, ?, ?, ?);";
            $rs = $conexion->getPDO()->prepare($sql);
            $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try{
                    $rs->execute(array($Codigo, $Nombre, $Zona, $Cientifico, $Genero, $Nacimiento, $Llegada ));
                    $state = "Animal Agregado con código" .$Codigo;

                    echo json_encode($state);
                } 
                catch (Exception $ex) {
                    $state = "Ha ocurrido un problema al ingresar el animal" .$ex;

                    echo json_encode($state);
                }
    }
}