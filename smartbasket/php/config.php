<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');
   
    const SENDER = 'sender@yandex.ru';
    const CATCHER = 'catcher@list.ru';
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
    