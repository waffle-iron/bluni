<?php

//header("Content-Type: application/json; charset=UTF-8");
if(isset($_POST['param']))
{
    $obj = json_decode($_POST['param'], false);
        
    include "../connect/db_connect.php";

    $sql="INSERT INTO unibg_books
          VALUES ('$obj->id_user', '$obj->title', '$obj->author', "
            . "'$obj->price', '$obj->description', '$obj->image', '$obj->faculty', '$obj->date')";

    if(mysqli_query($conn, $sql))
        echo true;
    else
        echo "[ERRORE] query non avviata: ".mysqli_error($conn);
    
}
else
{
    echo "[ERRORE] parametri non passati correttamente ".$_POST['param'];
}
