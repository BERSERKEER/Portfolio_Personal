<?php
$folderPath = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/');
$urlPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$url = substr($urlPath, strlen($folderPath));

define('URL', trim($url, '/')); // Elimina posibles barras al inicio o final.
