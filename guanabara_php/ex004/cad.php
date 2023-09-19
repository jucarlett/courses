<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>titulo</title>
</head>

<body>
    <header>
        <h1> Resultado do processamento </h1>
    </header>
    <main>

        <?php
        $nome = $_GET["nome"]?? "sem nome";
        $sobrenome = $_GET["sobrenome"]?? "sem sobrenome";
        echo "<p> é um prazer te conhecer, $nome $sobrenome";
        ?>
    </main>
</body>

</html>