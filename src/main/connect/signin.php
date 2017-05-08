<?php
   
    if($_POST['user'] && $_POST['psw'] 
            && $_POST['email']&& $_POST['phone']&& $_POST['faculty'])
    {
        $user = $_POST['user'];
        $psw = $_POST['psw'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $faculty = $_POST['faculty'];

        include '../connect/db_connect.php';
        
        $sql = "INSERT INTO unibg_users (username , password, email, phone_number, faculty) "
                . "VALUES ('$user', '$psw', '$email', '$phone', '$faculty')";
       
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
