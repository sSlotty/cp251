<?php 
    require_once('../../connect.php');
    header("Content-type: application/json; charset=utf-8"); 

        $username = $_POST['username'];
        $password = $_POST['password'];
        $role = $_POST['role'];
        
        $sql_username = "SELECT * FROM `user` WHERE `username` LIKE '".$username."' ";
        $sql_check = $conn->query($sql_username) or die($conn->error);

        if(!$sql_check->num_rows){
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $sql_create = "INSERT INTO `user` (`username`, `password`, `role`) 
            VALUES ('".$username."', 
                    '".$hashed_password."',
                    '".$role."');";
    
            $result = $conn->query($sql_create) or die($conn->error);
            // print_r($sql_create);
            if($result){
                echo json_encode(["status"=>true,"message"=>"สมัครสำเร็จ !"]);
                $_SESSION['UserID'] = $username;
                $_SESSION['role'] = $role;

            }else{
                echo json_encode(["status"=>false,"message"=>"สมัครไม่สำเร็จ !"]);
            }
        }else{
            echo json_encode(["status"=>false,"message"=>"username ซ้ำ  !"]);
        }
    
        header('Refresh:0; url= ../../index.php');


?>