<?php
$email = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];

$text = "От $name, $email. \r\n \r\n $message";

mail('ser.zah70@mail.ru', 'Заявка с сайта металл-лист-воронеж.рф', $text);
header("Location: /");
?>
