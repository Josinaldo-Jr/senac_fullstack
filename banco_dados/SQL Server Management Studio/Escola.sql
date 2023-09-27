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
------------------------------------
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
------------------------------------
create database empresa;

use empresa;

-- create a table
CREATE TABLE FORNECEDOR (
  id_fornecedor INTEGER PRIMARY KEY,
  nome varchar(255) NOT NULL,
  rua varchar(255) NOT NULL,
  cidade varchar(255) NOT NULL,
  estado char(2) NOT NULL  
);

CREATE TABLE CATEGORIA (
  id_categoria INTEGER PRIMARY KEY,
  nome varchar(255) NOT NULL
  );

CREATE TABLE PRODUTO (
  id_produto INTEGER PRIMARY KEY,
  nome varchar(255) NOT NULL,
  quantidade integer NOT NULL,
  preco float NOT NULL,
  id_fornecedor integer references FORNECEDOR (id_fornecedor),
  id_categoria integer references CATEGORIA (id_categoria)      
);

-- Inserir os valores na tabela PRODUTO
INSERT INTO PRODUTO (id_produto, nome, quantidade, preco, id_fornecedor, id_categoria)
VALUES
    (1, 'Cadeira azul', 30, 300.00, 5, 5),
    (2, 'Cadeira vermelha', 50, 2150.00, 2, 1),
    (3, 'Guarda-roupa Disney', 400, 829.50, 4, 1),
    (4, 'Torradeira Azul', 20, 9.90, 3, 1),
    (5, 'TV', 30, 3000.25, 2, 2);

-- Inserir os valores na tabela FORNECEDOR
INSERT INTO FORNECEDOR (id_fornecedor, nome, rua, cidade, estado)
VALUES
    (1, 'Ajax SA', 'Rua Presidente Castelo Branco', 'Porto Alegre', 'RS'),
    (2, 'Sansul SA', 'Av Brasil', 'Rio de Janeiro', 'RJ'),
    (3, 'South Chairs', 'Rua do Moinho', 'Santa Maria', 'RS'),
    (4, 'Elon Electro', 'Rua Apolo', 'São Paulo', 'SP'),
    (5, 'Mike electro', 'Rua Pedro da Cunha', 'Curitiba', 'PR');

-- Inserir os valores na tabela CATEGORIA
INSERT INTO CATEGORIA (id_categoria, nome)
VALUES
    (1, 'Super Luxo'),
    (2, 'Importado'),
    (3, 'Tecnologia'),
    (4, 'Vintage'),
    (5, 'Supremo');

--ATIVIDADE:

-- 1. INSERIR dados de 2 produtos de categoria 3 e qualquer fornecedor:
INSERT INTO Produto (id_produto, nome, quantidade, preco, id_fornecedor, id_categoria)
VALUES
    (6, 'Celular LG', 10, 100.00, 1, 3),
    (7, 'Portátil Sony', 20, 200.00, 2, 3);

-- 2. INSERIR dados de 2 fornecedores distintos, sendo um do Estado do RN e outro do estado da PB:
INSERT INTO Fornecedor (id_fornecedor, nome, rua, cidade, estado)
VALUES
    (6, 'Claus Natalino', 'Av. Bernardo Viera', 'Natal', 'RN'),
    (7, 'João S. Pessoa', 'Rua Paraíba', 'João Pessoa', 'PB');

-- 3. INSERIR dados de mais 1 categoria de nome Nacional:
INSERT INTO Categoria (id_categoria, nome)
VALUES
    (6, 'Nacional');

-- 4. ATUALIZAR a tabela produtos, aumentando o preço do produto cujo id_produto é 4, para R$ 298.00:
UPDATE Produto
SET preco = 298.00
WHERE id_produto = 4;

-- 5. RECUPERAR da tabela produtos, todos os produtos do Fornecedor localizado no RJ:
SELECT *
FROM Produto
WHERE id_fornecedor IN (SELECT id_fornecedor FROM Fornecedor WHERE estado = 'RJ');

-- 6. RECUPERAR da tabela produtos, todos os produtos do Fornecedor localizado no RS:
SELECT *
FROM Produto
WHERE id_fornecedor IN (SELECT id_fornecedor FROM Fornecedor WHERE estado = 'RS');

-- 7. RECUPERAR da tabela produtos, todos os produtos do Fornecedor localizado em SP:
SELECT *
FROM Produto
WHERE id_fornecedor IN (SELECT id_fornecedor FROM Fornecedor WHERE estado = 'SP');

-- 8. RECUPERAR da tabela produtos e fornecedores o nome do produto mais caro e o nome do fornecedor deste produto:
SELECT P.nome AS nome_produto, F.nome AS nome_fornecedor
FROM Produto P
INNER JOIN Fornecedor F ON P.id_fornecedor = F.id_fornecedor
WHERE P.preco = (SELECT MAX(preco) FROM Produto);

-- 9. ATUALIZAR a tabela fornecedores, alterando a cidade para Parnamirim, o estado para RN e a Rua para Abel Cabral, do Fornecedor cujo nome é Elon Electro:
UPDATE Fornecedor
SET cidade = 'Parnamirim', estado = 'RN', rua = 'Abel Cabral'
WHERE nome = 'Elon Electro';

-- 10. ATUALIZAR a tabela produtos, alterando o preço dos produtos em 10% de aumento, cujo fornecedor seja Sansul SA:
UPDATE Produto
SET preco = preco * 1.10
WHERE id_fornecedor = (SELECT id_fornecedor FROM Fornecedor WHERE nome = 'Sansul SA');

-- 11. ATUALIZAR a tabela produtos, alterando o preço dos produtos em 10% de diminuição, cujo fornecedor seja Mike electro e a categoria seja Supremo:
UPDATE Produto
SET preco = preco * 0.90
WHERE id_fornecedor = (SELECT id_fornecedor FROM Fornecedor WHERE nome = 'Mike electro')
AND id_categoria = (SELECT id_categoria FROM Categoria WHERE nome = 'Supremo');

-- 12. RECUPERAR da tabela produtos, todos os produtos que tenham o preço entre 8 e 2.000, ordenados a partir do maior preço:
SELECT *
FROM Produto
WHERE preco BETWEEN 8 AND 2000
ORDER BY preco DESC;

-- 13. RECUPERAR da tabela produtos, todos os produtos que tenham o preço maior que 2.000, ordenados a partir do menor preço:
SELECT *
FROM Produto
WHERE preco > 2000
ORDER BY preco ASC;

-- 14. RECUPERAR da tabela fornecedor, o nome de todos os fornecedores que iniciam com a letra A:
SELECT nome
FROM Fornecedor
WHERE nome LIKE 'A%';

-- 15. RECUPERAR da tabela fornecedor, o nome de todos os fornecedores que contenham a letra S:
SELECT nome
FROM Fornecedor
WHERE nome LIKE '%S%';

-- 16. ATUALIZAR a tabela produtos, aumentando em 15% a quantidade de produtos que tenham o preço inferior a 300:
UPDATE Produto
SET quantidade = quantidade * 1.15
WHERE preco < 300;

-- 17. APAGAR da tabela produtos todos os produtos da categoria 5:
DELETE FROM Produto
WHERE id_categoria = 5;

-- 18. RECUPERAR da tabela fornecedores, todos os registros cadastrados:
SELECT *
FROM Fornecedor;

-- 19. RECUPERAR da tabela produtos, o nome dos produtos que iniciam com a letra T e tenham o preço acima de 400:
SELECT nome
FROM Produto
WHERE nome LIKE 'T%' AND preco > 400;

-- 20. APAGAR a tabela produtos:
DELETE FROM Produto;



-- fetch some values
SELECT * FROM produto;
SELECT * FROM fornecedor;
SELECT * FROM categoria;