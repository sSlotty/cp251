<?php 
    require_once('../../connect.php');
    header("Content-type: application/json; charset=utf-8"); 

        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $major = $_POST['major'];
        $email = $_POST['email'];
        $DOB = $_POST['dob'];
        $phone = $_POST['phone'];
        

        $sql = "INSERT INTO `students` (`firstname`, `lastname`, `major`, `email`, `DOB`, `phone`) 
                VALUES ('".$firstname."', '".$lastname."', '".$major."', '".$email."', '".$DOB."', '".$phone."');";
        $result = $conn->query($sql) or die($conn->error);

            if($result){
                echo json_encode(["status"=>true,"message"=>"เพิ่มข้อมูลสำเร็จ !"]);

            }else{
                echo json_encode(["status"=>false,"message"=>"เพิ่มข้อมูลไม่สำเร็จ !"]);
            }
        
    
        header('Refresh:0; url= ../../index.php');


?>