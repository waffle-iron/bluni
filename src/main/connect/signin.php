<?php
   
    if(isset($_POST['param']))
    {
        $obj = json_decode($_POST['param'], false);

        include '../connect/db_connect.php';
        
        $sql = "INSERT INTO unibg_users (username , password, email, phone_number, faculty) "
                . "VALUES ('$obj->user', '$obj->psw', '$obj->email', '$obj->phone', '$obj->faculty')";
       
        if(mysqli_query($conn, $sql))
            echo true;
        else
            echo "[ERRORE] errore nell'inserimento dei dati ".mysqli_error($conn);
    }
    else
    {
        echo "[ERRORE] dati non inseriti nel DB";
    }
?>
