<?php

header('Access-Control-Allow-Origin: *');

$task;

if (array_key_exists("task", $_GET)) {
  $task = $_GET['task'];
}
if ($task == "write") {
  sendMail();
}

function sendMail()
{
  if (!array_key_exists('message', $_POST)) {

    echo "error";
    return;
  } else {
    $entete  = 'MIME-Version: 1.0' . "\r\n";
    $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $entete .= 'From: ' . $_POST['email'] . "\r\n";
    $corp = '<h1>Message envoyé depuis la page Contact du Portfolio</h1>
  <p><strong>Nom : </strong>' . $_POST['name'] . '<br>
  <strong>Email : </strong>' . $_POST['email'] . '<br>
  <strong>Message : </strong>' . $_POST['message'] . '</p>';
    $retour = mail('hansart.marine@gmail.com', 'Envoi depuis la page Contact Portfolio', $corp, $entete);
    if ($retour)
      echo 'success';
    else
      echo 'fail';
  }
}
