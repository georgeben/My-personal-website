<?php
header('Content-type: application/json');
$response=array();
if ($_POST){
    if ($_POST['email'] == '') {
        echo "<p>Email address is required.</p>";
    }
    else
    {
    sendMail($_POST['email'], $_POST['message'], $_POST['name']);
    $response['status']="success";
     echo json_encode($response);
    }
}else{
  $response['status']="Not a post method";
   echo json_encode($response);
}
function sendMail($from, $message, $name){
$to='imorobebh@gmail.com';
$subject = "Contact Email";
$message = "
<html>
<body>
<p>From: ". $name ."</p>
<br>
<p>Message: ".$message."</p>
<p>Email: ".$from."</p>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "From:".$from. "\r\n";
    $headers.="Reply-To: ".$from."\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";

mail($to,$subject,$message,$headers);
}
?>
