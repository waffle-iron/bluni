<?php
//header("Content-Type: application/json; charset=UTF-8");
if(isset($_POST['param']))
{
    $obj = json_decode($_POST['param'], false);
        
    include "../connect/db_connect.php";
    
    $sql=" DELETE FROM unibg_books 
           WHERE 
           username = '$obj->user' AND 
           title = '$obj->title' AND
           date = '$obj->date'";
    $res = mysqli_query($conn, $sql);
    
    if(mysqli_query($conn, $sql))
        echo true;
    else
        echo "[ERRORE] query non avviata: ".mysqli_error($conn);
    
}
else
{
    echo "[ERRORE] parametri non passati correttamente ".$_GET['param'];
}
