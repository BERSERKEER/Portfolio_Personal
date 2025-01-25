<?php
require_once(__DIR__ . '/Config/config.php');
require_once(__DIR__ . '/Config/autoLoad.php');

$router = new Router();
$router->run();
