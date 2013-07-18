<?php
// get posted data into local variables
$EmailFrom = Trim(stripslashes($_POST['EmailFrom'])); 
$EmailTo = "info@gemdesign.me";
$Subject = Trim(stripslashes($_POST['Subject'])); 
$Name = Trim(stripslashes($_POST['Name'])); 
$Comments = Trim(stripslashes($_POST['Comments'])); 

// validation
$validationOK=true;
if (Trim($EmailFrom)=="") $validationOK=false;
if (Trim($Name)=="") $validationOK=false;
if (Trim($Comments)=="") $validationOK=false;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=Index.html\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Comments: ";
$Body .= $Comments;
$Body .= "\n";
$Body2 = "The following message was sent to gemdesign.me via the contact form.";
$Body2 .= "\n";
$Body2 .= "\n";
$Body2 .= "Name: ";
$Body2 .= $Name;
$Body2 .= "\n";
$Body2 .= "Comments: ";
$Body2 .= $Comments;
$Body2 .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
$success = mail($EmailFrom, $Subject, $Body2, "From: <$EmailTo>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=Index.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=Index.html\">";
}
?>