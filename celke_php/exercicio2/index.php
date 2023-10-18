<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="images/favicon.ico" />
    <title>Celke</title>
</head>

<body>

    <h2>Cadastrar usuário</h2>

    <?php 
    filter_input_array(INPUT_POST, FILTER_DEFAULT);
    $dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);
    var_dump($dados);    

    if(!empty($dados['SendCadUser'])){
        var_dump($dados);
    }
    ?>

    <form method="POST" action="processa.php">
        <label>Nome: </label>
        <input type="text" name="nome_cliente" placeholder="Digite o nome" required /><br><br>

        <label>E-mail: </label>
        <input type="email" name="email_cliente" placeholder="Digite o melhor" required /><br><br>

        <label>Senha: </label>
        <input type="password" name="senha_cliente" placeholder="Digite a senha" required /><br><br>

        <input type="submit" value="Cadastrar" name="SendCadUser" />

    </form>

</body>

</html>