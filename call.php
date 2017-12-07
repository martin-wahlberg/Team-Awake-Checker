<?php
$servername = "db_host";
$username = "db_username";
$password = "db_pw";
$dbname = "db_name";
$why = $_GET['why'];
$awake = $_GET['awake'];
$date = $_GET['date'];
if($why == "status"){
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, awake, datecheck FROM awakeCheck";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $i = 0;
  echo "{";
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "\"name$i\":";
      echo "\"";
      echo $row["name"];
      echo "\",";
      echo "\"awake$i\":";
      echo "\"";
      echo $row["awake"];
      echo "\",";
      echo "\"datecheck$i\":";
      echo "\"";
      echo $row["datecheck"];
      echo "\",";
        $i++;
    }
    echo "\"close\":\"close\"";
    echo "}";
} else {
    echo "0 results";
}

$conn->close();
}
if($why == member1){
  $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE awakeCheck SET awake='$awake', datecheck='$date' WHERE name='member1'";

if ($conn->query($sql) === TRUE) {
    echo "yes";
} else {
    echo "no" . $conn->error;
}

$conn->close();
}
if($why == member2){
  $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE awakeCheck SET awake='$awake', datecheck='$date' WHERE name='member2'";

if ($conn->query($sql) === TRUE) {
    echo "yes";
} else {
    echo "no" . $conn->error;
}

$conn->close();
}
if($why == member3){
  $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE awakeCheck SET awake='$awake', datecheck='$date' WHERE name='member3'";

if ($conn->query($sql) === TRUE) {
    echo "yes";
} else {
    echo "no" . $conn->error;
}

$conn->close();
}
if($why == member4){
  $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE awakeCheck SET awake='$awake', datecheck='$date' WHERE name='member4'";

if ($conn->query($sql) === TRUE) {
    echo "yes";
} else {
    echo "no" . $conn->error;
}

$conn->close();
}
 ?>
