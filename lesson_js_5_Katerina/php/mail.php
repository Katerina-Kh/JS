<?php
	// Переменная в PHP это $имя_переменной
	// filter_var($_POST["атрибут name тэга input"], FILTER_SANITIZE_STRING)
	$name    	= filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$phone      = filter_var($_POST["user_phone"], FILTER_SANITIZE_STRING);
	$emeil      = filter_var($_POST["user_emeil"], FILTER_SANITIZE_STRING);
	$data   	= filter_var($_POST["data"], FILTER_SANITIZE_STRING);
	$time   	= filter_var($_POST["time"], FILTER_SANITIZE_STRING);
	$list       = filter_var($_POST["list"], FILTER_SANITIZE_STRING);
	$message    = filter_var($_POST["user_message"], FILTER_SANITIZE_STRING);
	$errors;

	// В PHP добавить лишь проверку на пустоту
	if (empty($name)) {
			$errors .= "Вкажіть ім'я";
		}else {
			$user_name = $name;
		}
	if (empty($phone)) {
			$errors .= "Номер телефону";
		}else {
			$user_phone = $phone;
		}
	if (empty($emeil)) {
			$errors .= "Вкажіть emeil";
		}else {
			$user_emeil = $emeil;
		}
	if (empty($data )) {
			$errors .= "Вкажіть дату поцедури";
		}else {
			$data = $data;
		}
		if (empty($time )) {
			$errors .= "Вкажіть час поцедури";
		}else {
			$time = $time;
		}
	if (empty($list)) {
			$errors .= "Вкажіть тип послуги";
		}else {
			$user_list = $list;
		}
	if (empty($message )) {
			$errors .= "Повідомлення";
		}else {
			$user_message = $message;
		}


	// Чтобы добавить несколько полей в PHP нужно использовать .=
	// Пример ниже

	$to = "info@atereshchuk.space";
	$mailBody = "JS. ДЗ номер 4\n";
	$mailBody .= "Ім'я: " . $user_name . "\n";
	$mailBody .= "Контактний телефон: " . $user_phone . "\n";
	$mailBody .= "Електронна почта: " . $user_emeil . "\n";
	$mailBody .= "Дата: " . $data . "\n";
	$mailBody .= "Час: " . $time . "\n";
	$mailBody .= "Послуга: " . $user_list . "\n";
	$mailBody .= "Повідомлення: " . $user_message . "\n";

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