<?php
$email = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];

$text = "От $name, $email. \r\n \r\n $message";

mail('nikzhrv@yandex.ru', 'Заявка с сайта металл-лист-воронеж.рф', $text);
?>
