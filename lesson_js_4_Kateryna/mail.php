<?php
	// Переменная в PHP это $имя_переменной
	// filter_var($_POST["атрибут name тэга input"], FILTER_SANITIZE_STRING)
	$name    	= filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$phone      = filter_var($_POST["user_phone"], FILTER_SANITIZE_STRING);
	$emeil      = filter_var($_POST["user_emeil"], FILTER_SANITIZE_STRING);
	$datatime   = filter_var($_POST["data_time"], FILTER_SANITIZE_STRING);
	$list       = filter_var($_POST["list"], FILTER_SANITIZE_STRING);
	$message    = filter_var($_POST["user_message"], FILTER_SANITIZE_STRING);
	$errors;

	// В PHP добавить лишь проверку на пустоту
	if (empty($name)) {
			$errors .= "Вкажіть ім'я";
		}else {
			$user_name = $name
		}
	if (empty($phone)) {
			$errors .= "Номер телефону";
		}else {
			$user_phone = $phone 
		}
	if (empty($emeil)) {
			$errors .= "Вкажіть emeil";
		}else {
			$user_emeil = $emeil 
		}
	if (empty($datatime )) {
			$errors .= "Вкажіть дату та час поцедури";
		}else {
			$data_time = $datatime  
		}
	if (empty($list)) {
			$errors .= "Вкажіть тип послуги";
		}else {
			$list = $list 
		}
	if (empty($message )) {
			$errors .= "Повідомлення";
		}else {
			$user_message = $message  
		}


	// Чтобы добавить несколько полей в PHP нужно использовать .=
	// Пример ниже

	$to = "k.khalimovska@gmail.com";
	$mailBody = "JS. ДЗ номер 4\n";
	$mailBody .= "Поле ім'я: " . $name . "\n";
	$mailBody .= "Поле телефон: " . $phone . "\n";
	$mailBody .= "Поле почта: " . $emeil . "\n";
	$mailBody .= "Поле дата та час: " . $datatime . "\n";
	$mailBody .= "Поле список послуг: " . $list . "\n";
	$mailBody .= "Поле повідомлення: " . $message . "\n";

	// и так столько, сколько нужно

	// Это отправка. Это не трогаем
	if (mail($to, 'JS. ДЗ номер 4', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>