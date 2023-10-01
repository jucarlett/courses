<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbName = "celke-v2";
$port = 3306;

try {
    $conn = new PDO("mysql:host=$host;port=$port;dbname=" . $dbName, $user, $pass);
    echo "Conexão realizada com sucesso!";
} catch (PDOException $error) {
    echo "Erro: " . $error->getMessage();
}