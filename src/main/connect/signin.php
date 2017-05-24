<?php
   
    if(isset($_POST['param']))
    {
        include '../connect/db_connect.php';
        
        $obj = json_decode($_POST['param'], false);
        $psw = md5($obj->psw);
        
        $sql = "INSERT INTO unibg_users_login (username , password) "
                . "VALUES ('$obj->user', '$psw');";
        
        $sql2 = "INSERT INTO unibg_users (username ,email, phone_number, faculty) "
                . "VALUES ('$obj->user', '$obj->email', '$obj->phone', '$obj->faculty')";
        
        if(mysqli_query($conn, $sql) && mysqli_query($conn, $sql2))
        {
            echo true;
        }
        else
            echo $sql."[ERRORE] errore nell'inserimento dei dati ".mysqli_error($conn);
    }
    else
    {
        echo "[ERRORE] dati non inseriti nel DB";
    }
?>
