<h1 align="center">
<br>

<p align="center">
    <b ></b>Mensagerias</b>
    <h4 align="center"> Projeto feito entre dois códigos (express/nest) onde cada um tem seu objetivo sendo: 
    <br>Nest: Enviar as mensagens tanto para uma (queue/exchange). Assim criando o fluxo de mensagerias.
    <br>Express: Criado para ouvir as mensagens e então "apaga-las". </h2>
</p>

<br>

## 🛠 Techs
  - [Nodejs](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [RabbitMQ](https://www.rabbitmq.com/)
  - [Nest](https://docs.nestjs.com/)

  ### Para rodar a plataforma  🚀

  #### Cloning
  ```ps
  # Clone o repositório utilizando o git
  $ git clone ()
  ```

  #### Rodando docker
  ```ps
  # Rode o docker para ter um rabbit na sua maquina
  $ docker-compose up -d
  ```

  #### Subindo a queue/exchange
  ```ps
  # Entrar no site do rabbit (localhost:15672)
  $ Então cria uma (queue) e si necessário uma (exchanges).
  ```

  #### :arrow_forward: Executando

  ##### :computer: **Server**
  ```ps
  $ cd server
  $ npm run start:dev
  ```

  ##### :hugs: **Consumer**
  ```ps
  $ cd consumer
  $ npm run start:dev
  ```