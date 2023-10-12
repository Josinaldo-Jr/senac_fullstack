create database fullstack;

use fullstack;

CREATE TABLE USUARIO (
  email varchar(45) PRIMARY KEY not null,
  nome varchar(45) NOT NULL,
  senha varchar(13) NOT NULL
);

INSERT INTO USUARIO (email, nome, senha)
VALUES ('junrilly@gmail.com', 'Josinaldo Júnior', '12356789jRR');

select * from USUARIO;