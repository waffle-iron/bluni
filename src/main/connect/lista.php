<?php

if(isset($_POST['title']))
{
    $titolo = $_POST['title'];

    include "../connect/db_connect.php";

    $sql="  SELECT *
            FROM unibg_books 
            WHERE 
            title like '%$titolo%'"; 

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
        echo false;
    }
}
else
{
    echo "[ERRORE] dati non inseriti correttamente";
}

	
