<!-- filepath: /C:/Users/elija/OneDrive/Desktop/Elijah Files/projects/Portfolio Projects/carwash/car-wash-website-template/send_email.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $description = htmlspecialchars($_POST['description']);

    $to = "elijahgummer5@gmail.com"; // Your email address
    $subject = "New Appointment Request";
    $message = "Name: $name\nEmail: $email\nDescription: $description";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your request has been sent successfully!";
    } else {
        echo "There was a problem sending your request. Please try again.";
    }
}
?>