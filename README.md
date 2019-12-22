# JS Super Infinite Runner 2D

![](https://img.shields.io/github/license/MarcioCamara/mkDataTest)
![](https://img.shields.io/github/repo-size/MarcioCamara/mkDataTest)
![](https://img.shields.io/github/last-commit/MarcioCamara/mkDataTest)
![](https://img.shields.io/github/followers/MarcioCamara?label=Follow%20Me&style=social)

## Instruções para instalação do ambiente

- Clone ou baixe os arquivos do projeto;
- [Instale o Laravel](https://laravel.com/docs/5.8#installing-laravel) e suas dependências;
- Em seu pacote de servidor preferido (para o desenvolvimento foi utilizado o [XAMPP](https://www.apachefriends.org/pt_br/download.html)) ative o MySQL (é possível também utilizar um servidor real, apenas adaptando os passos aplicáveis a tal);
- Abra o PHPMyAdmin e crie uma database com o nome desejado (para o desenvolvimento foi criada uma database entitulada "mkdata");
- Vá ao projeto do Laravel e altere o arquivo [.env](https://github.com/laravel/laravel/blob/master/.env.example) com as informações referentes a database criada;
- Abra um novo terminal (prompt de comando ou PowerShell), acesse a pasta na qual o projeto se encontra e digite os comandos:
  ```shell
  $ php artisan migrate
  ```
  (para que as tabelas sejam criadas)
  
  ```shell
  $ php artisan db:seed
  ```
  (para que as tabelas sejam populadas através do [faker](https://github.com/fzaninotto/Faker))
  
  ```shell
  $ php composer install
  ```
  (para garantir que todas versões de/e todas dependências sejam as mesmas utilizadas durante o desenvolvimento)
  
  ```shell
  $ php artisan serve
  ```
  (para iniciar o servidor \[caso a porta padrão já esteja sendo utilizada o servidor não iniciará e a porta precisará ser alterada com o comando "php artisan serve --port=PORTA"\]);
- Acesse "localhost:PORTA".

## Screenshots

![Tela de Login](https://raw.githubusercontent.com/MarcioCamara/mkDataTest/master/__screenshots/imagem_1.png)

![Cadastro de Usuário](https://raw.githubusercontent.com/MarcioCamara/mkDataTest/master/__screenshots/imagem_2.png)

![Listagem de Usuários](https://raw.githubusercontent.com/MarcioCamara/mkDataTest/master/__screenshots/imagem_3.png)

![Edição de Usuário](https://raw.githubusercontent.com/MarcioCamara/mkDataTest/master/__screenshots/imagem_4.png)

## Desenvolvido utilizando

- [Laravel](https://laravel.com/) e suas dependências
- [Select2](https://select2.org/)
- [FontAwesome](https://fontawesome.com/)
- [laravel-pt-BR-localization](https://github.com/lucascudo/laravel-pt-BR-localization)
- [jQuery Mask Plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/)
- [toastr](https://github.com/CodeSeven/toastr)

## Autores

- [Marcio Câmara](https://marciocamara.github.io) - Desenvolvimento FullStack

Veja também a lista de [contribuidores](https://github.com/MarcioCamara/calculadora-imc/graphs/contributors) que participaram desse projeto.

## Licença

Esse projeto está licenciado sob a Licença [MIT](https://github.com/MarcioCamara/mkDataTest/blob/master/LICENSE).