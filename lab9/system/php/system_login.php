<?php 
    require_once('../../connect.php');
    header("Content-type: application/json; charset=utf-8"); 

    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM user WHERE username = ?;");
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    

    if(!empty($row)){

        if(password_verify($password, $row['password'])){

            $_SESSION['UserID'] = $username;
            $_SESSION['role'] = $row['role'];
            $cookie_value = $username;
            setcookie('UserID', $cookie_value, time() + (86400 * 30), "/");
            
            echo json_encode(["status"=>true,"message"=>"Login !"]);
        } else {
            echo json_encode(["status"=>false,"message"=>"Incorrect User Name OR Password Found!"]);
        }
    } else {
        echo json_encode(["status"=>false,"message"=>"Incorrect User Name OR Password Found  !"]);
    }
    
    header('Refresh:0; url= ../../index.php');


?>