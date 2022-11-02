<?php

require_once 'inc/functions.php';
require_once 'inc/header.php';

try {
  $db = new PDO('mysql:host=localhost;dbname=shoppinglist;charset=utf8','root','');
  $sql = 'select * from item';
  $query = $db -> query($sql);
  $results = $query -> fetchAll(PDO::FETCH_ASSOC);
  header('HTTP/1.1 200 OK');
  print json_encode($results, JSON_PRETTY_PRINT);
  
} catch (PDOException $pdoex) {
  returnError($pdoex);
}