<?php

class verzonas{
    function BuscarZona($param){
        extract($param);
        $sql = "SELECT * FROM zonas where codigo_zona = ?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_zona))) {
            if ($filas = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($filas as $fila) {

                    $array[] = $fila;
                }
            }
        }
        echo json_encode(($array));
    }

    function ModificarEstado($param){
        extract($param);
        $sql = "UPDATE zonas SET estado_zona='$estado' WHERE codigo_zona=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_zona))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        $array = "Estado Actualizado correctamente";
        echo json_encode(($array));
    }
}