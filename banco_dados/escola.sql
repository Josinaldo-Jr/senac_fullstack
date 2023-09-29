create database escola;

use escola;

CREATE TABLE ALUNO (
  matricula INTEGER PRIMARY KEY not null,
  nome varchar(45) NOT NULL,
  turma varchar(2) NOT NULL,
  email varchar(45) NOT NULL,
  genero varchar(2) NOT NULL  
);

INSERT INTO ALUNO (matricula, nome, turma, email, genero)
VALUES
    (111, 'João Victor', 'A1', 'joãov@gmail.com', 'M'),
	(121, 'Maria Vitória', 'A2', 'mariav@gmail.com', 'F'),
	(131, 'Pedro Arthur', 'B1', 'parthur@gmail.com', 'M'),
	(141, 'Luiz Afonso', 'A1', 'luizaf@gmail.com', 'M'),
	(151, 'Vitória Luiza', 'A2', 'vluiza@gmail.com', 'F');

select * from aluno;