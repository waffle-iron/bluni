<?php
//header("Content-Type: application/json; charset=UTF-8");
if(isset($_GET['param']))
{
    include "../connect/db_connect.php";
    
    $obj = json_decode($_GET['param'], false);
    $psw = md5($obj->psw);
    
    $sql=" SELECT*
            FROM unibg_users
            WHERE
                username = ( SELECT username
                                FROM unibg_users_login 
                                WHERE 
                                BINARY username ='$obj->user' AND BINARY password = '$psw')"; 

    $res = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($res) > 0) 
    {
        $out = mysqli_fetch_assoc($res);
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
