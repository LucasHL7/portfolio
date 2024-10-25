<?php
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
    
    $para = "lhls2002@gmail.com";
    $assunto = "Mensagem de Contato";
    
    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone;
    $cabeca = "From: focahls20@gmail.com"."\n"."Reply-to: ".$email."\n"."X-Mailer: PHP/".phpversion();
    
    if(mail($para, $assunto, $corpo, $cabeca)){
        echo("E-mail enviado com sucesso!");
    } else {
        echo("Houve um erro ao enviar o email!");
    }
?>
