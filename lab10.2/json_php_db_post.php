<?php
header("Content-Type: application/json; charset=UTF-8");

$obj = json_decode($_POST['x'],false);
$table = $obj->table;
$limit = $obj->limit;


$conn = new mysqli("localhost", "", "", "cp251db");
$result = $conn->query("SELECT * FROM ".$table." LIMIT ".$limit);
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
// echo gettype(json_encode($outp));

// echo "myFunc(".json_encode($outp).")";


?>