<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "super_mart";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Capture POST data
$name = $_POST['name'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$total_amount = $_POST['total_amount'];

// Insert data into the database
$sql = "INSERT INTO orders (name, address, phone, total_amount) VALUES ('$name', '$address', '$phone', '$total_amount')";
if ($conn->query($sql) === TRUE) {
    echo "Order placed successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
