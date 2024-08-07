<?php

$host = "";
$username = "";
$password = "";
$database = "Count_the_Tones";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection Failed:". $conn->connect_error);}


$name = $_POST['name'];
$favNum = $_POST['favNum'];



$sql = "INSERT INTO participants (name, favNum) VALUES ('$name', '$favNum')";
if ($conn->query($sql)===true){
    echo "Form Submitted Successfully";}
    else {echo"Error: ".$sql."<br>".$conn->error;}
    