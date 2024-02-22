<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['Company'];
    $message = $_POST['message'];
    
    // Set the recipient email address
    $to = "louise@nexelence.com";
    
    // Set the email subject
    $subject = "New message from $name";
    
    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Company: $company\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Build the email headers
    $email_headers = "From: $name <$email>";
    
    // Send the email
    mail($to, $subject, $email_content, $email_headers);
    
    // Redirect to a thank you page
    header("Location: thank_you.html");
    exit;
}
?>
