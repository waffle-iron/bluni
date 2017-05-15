<?php

if($_POST['title'] )
    {
        $titolo = $_POST['title'];

        include "../connect/db_connect.php";

        $sql="SELECT title
            FROM unibg_books 
            WHERE 
            title ='$titolo'"; 

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

	
