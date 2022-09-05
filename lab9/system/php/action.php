<?php 
    require_once('../../connect.php');
    header("Content-type: application/json; charset=utf-8"); 

//    print_r($_POST);
$std_id = $_POST['std_id'];
$action = $_POST['action'];

    
    if($action == "edit"){

        $first_name = $_POST['firstname'];
        $last_name = $_POST['lastname'];
        $major = $_POST['major'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $DOB = $_POST['DOB'];
        
        
       
        $sql = "UPDATE students SET 
                firstname = '$first_name', 
                lastname = '$last_name', 
                major = '$major', 
                email = '$email', 
                DOB = '$DOB', 
                phone = '$phone' 
                WHERE std_id = $std_id";
        $result = $conn->query($sql) or die($conn->error);
        if($result){
            echo json_encode(["status"=>true,"message"=>"แก้ไขข้อมูลสำเร็จ "]);
        }else{
            echo json_encode(["status"=>false,"message"=>"แก้ไขข้อมูลไม่สำเร็จ "]);

        }
    

    }else if($_POST['action'] == 'delete'){
        $sql = "DELETE FROM `students` WHERE `students`.`std_id` = $std_id;";
        $result = $conn->query($sql) or die($conn->error);
        if($result){
            echo json_encode(["status"=>true,"message"=>"ลบข้อมูลสำเร็จ "]);
        }else{
            echo json_encode(["status"=>false,"message"=>"ลบข้อมูลไม่สำเร็จ "]);

        }
    }

    header('Refresh:0; url= ../../index.php');


?>