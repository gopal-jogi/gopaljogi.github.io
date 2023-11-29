<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "gopaljogi5@email@gmail.com"; // Replace with your Gmail address
    $headers = "From: $email";
    $body = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nSubject: $subject\n\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>
