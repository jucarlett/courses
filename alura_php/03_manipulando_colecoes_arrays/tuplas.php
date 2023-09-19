<?php 

$dados = [
    'nome' => 'Vinicius', 
    'nota' => 10,
    'idade' => 24
];

list($nome, $nota, $idade) = $dados; //cria variaveis a partir dos dados
[$nome, $nota, $idade] = $dados; //cria variaveis a partir dos dados - igual d cima


var_dump($nome, $nota, $idade);