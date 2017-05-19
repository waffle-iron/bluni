<?php
//header("Content-Type: application/json; charset=UTF-8");
if(isset($_GET['param']))
{
    $obj = json_decode($_GET['param'], false);
        
    include "../connect/db_connect.php";
    
    $sql=" SELECT *
           FROM unibg_users 
           WHERE 
           title LIKE '$obj->title' AND faculty = '$obj->psw'";

    $res = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($res) > 0) 
    {
        $out = mysqli_fetch_assoc($res);
        //unset($out['password']);
        echo json_encode($out);
    }
    else
    {
        echo "nessuno risultato dalla query";
    }
}
else
{
    echo "[ERRORE] parametri non passati correttamente ".$_GET['param'];
}
