<?php

    if($_POST['user'] && $_POST['psw'])
    {
        $user = $_POST['user'];
        $psw = $_POST['psw'];

        include "../connect/db_connect.php";

        $sql="SELECT username, password 
            FROM unibg_users 
            WHERE 
            BINARY username ='$user' AND BINARY password = '$psw'";

        $res = mysqli_query($conn, $sql);

        if(mysqli_num_rows($res))
        {
            echo true;
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

	