<?php
$host = "localhost";  // MySQL host (usually 'localhost')
$dbname = "super_mart"; // Database name
$username = "root";    // MySQL username
$password = "";        // MySQL password (default for XAMPP is empty)

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
