<?php

require 'src/Conta.php';

$primeiraConta = new Conta();
$primeiraConta->cpfTitular = '123.456.789-10';
$primeiraConta->nomeTitular = 'Vinicius Dias';
$primeiraConta->saldo = 200;

$segundaConta = new Conta();
$segundaConta->cpfTitular = '987.654.321-10';
$segundaConta->nomeTitular = 'Patricia';
$segundaConta->saldo = 300;