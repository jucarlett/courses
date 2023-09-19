<?php

$alunos2021 = [
    'Vinicius',
    'João',
    'Ana',
    'Roberto',
    'Maria',
];

$novosAlunos = [
    'Patricia',
    'Nico',
    'Kilderson',
    'Daiane',
];

$alunos2022 = [...$alunos2021, 'Carlos Vinicius', ...$novosAlunos];

array_push($alunos2022, 'João Paulo', 'Rafaela'); //add varios no array
$alunos2022[] = 'João Paulo'; //add 1 no array - principal

array_unshift($alunos2022, 'João Pinto'); //add no array no começo 
array_shift($alunos2022); //reordena os indices no simples
array_pop($alunos2022); // remove o ultimo elemento do array e retorna o ultimo elemento removido





var_dump($alunos2022);