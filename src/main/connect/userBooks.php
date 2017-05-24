<?php
//header("Content-Type: application/json; charset=UTF-8");
if(isset($_GET['param']))
{
    $obj = json_decode($_GET['param'], false);
        
    include "../connect/db_connect.php";
    
    $sql=" SELECT *
           FROM unibg_books INNER JOIN unibg_users ON unibg_books.username = unibg_users.username
           WHERE 
           unibg_books.username = '$obj->user'";
    
    $res = mysqli_query($conn, $sql);
    
    if(mysqli_num_rows($res) > 0)
    {
        $out = array();
        while($row = mysqli_fetch_assoc($res))
        {
            $out[] = $row;
        }
        
        echo json_encode($out);
        
    }
    else
    {
        echo json_encode (json_decode ("{}"));
    }
}
else
{
    echo "[ERRORE] parametri non passati correttamente ".$_GET['param'];
}
