<?php 

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$ip = $_SERVER['REMOTE_ADDR'];

echo json_encode(["ip"=>$ip]);

?>