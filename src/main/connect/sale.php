<?php

    if($_POST['id_user'] && $_POST['title']
            && $_POST['price']&& $_POST['date'] && $_POST['faculty'])
    {
        $idUser = $_POST['id_user'];
        $title = $_POST['title'];
        $price = $_POST['price'];
        $date = $_POST['date'];
        $faculty = $_POST['faculty'];
        //parametri facoltativi
        $author = $_POST['author'];
        $isb = $_POST['isb'];
        $description = $_POST['description'];
        $image = $_POST['image'];
        
        include "../connect/db_connect.php";

        $sql="INSERT INTO unibg_books
              VALUES ('$idUser', '$title', '$isbn', '$price', '$description', '$image', '$date')";

        if(mysqli_query($conn, $sql))
            echo true;
        else
            echo "[ERRORE] errore nell'inserimento dei dati ".mysqli_error($conn);
    }
    else
    {
        echo "[ERRORE] dati non inseriti correttamente";
    }

	