<?php

require 'src/conta.php';$conta = criarConta('123.456.789-10', 'Vinicius Dias', 500.0);
var_dump($conta);