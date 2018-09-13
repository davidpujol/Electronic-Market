<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {

  //Email information
  $admin_email = "david.pujolperich@gmail.com";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];

  //send email
  mail($admin_email, "$subject", "From:" . $email);

  //Email response
  echo "Thank you for contacting us!";
  }
?>