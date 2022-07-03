CREATE DATABASE bebasic;

USE bebasic;

CREATE TABLE cadastro_cliente(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (100) NOT NULL,
foto LONGBLOB,
sexo VARCHAR (50),
cpf CHAR (11),
data_nascimento DATE,
telefone VARCHAR (50),
senha INT (10) NOT NULL,
data_cadastro DATE
);

ALTER TABLE cadastro_cliente
ADD email VARCHAR(50) NOT NULL UNIQUE;


SELECT * FROM cadastro_cliente;

INSERT INTO cadastro_cliente (nome,email,sexo,cpf,data_nascimento,telefone,senha,data_cadastro)
VALUES("Letícia de Jesus Silva", "leticia@email.com", "feminino","31450411852","1985-02-23", "974529235","123456","2022-07-03");

INSERT INTO cadastro_cliente (nome,email,sexo,cpf,data_nascimento,telefone,senha,data_cadastro)
VALUES("Wellington Boorati", "wellington@email.com", "masculino","1245678999","1984-03-01", "999998888","789123","2022-07-03");

INSERT INTO cadastro_cliente (nome,email,sexo,cpf,data_nascimento,telefone,senha,data_cadastro)
VALUES("Rogerio Brito", "brito@email.com", "masculino","31499988855","1983-04-02", "123456987","987654","2022-07-03");



CREATE TABLE pedido_venda (
id INT AUTO_INCREMENT PRIMARY KEY,
id_cadastro_cliente INT NOT NULL,
FOREIGN KEY (id_cadastro_cliente) REFERENCES cadastro_cliente(id),
id_endereco_cliente INT NOT NULL,
FOREIGN KEY (id_endereco_cliente) REFERENCES endereco_cliente(id),
data_pedido DATE,
frete DECIMAL,
cupom_desconto TINYINT (1),
valor_total_pedido DECIMAL,
data_entrega DATE,
status_pedido TINYINT (1)
);

SELECT * FROM pedido_venda;


/*Esta inserção deu erro*/
INSERT INTO pedido_venda (data_pedido,frete,cupom_desconto,valor_total_pedido,data_entrega,status_pedido)
VALUES ("2022-07-03","10.21","0","245.25","2022-07-07","1");

CREATE TABLE itens_pedido(
id INT AUTO_INCREMENT PRIMARY KEY,
id_produto_estoque INT NOT NULL,
FOREIGN KEY(id_produto_estoque) REFERENCES produto_estoque (id),
id_pedido_venda INT NOT NULL,
FOREIGN KEY (id_pedido_venda) REFERENCES pedido_venda (id),
quantidade INT
);

SELECT * FROM itens_pedido;

CREATE TABLE produto_estoque (
id INT AUTO_INCREMENT PRIMARY KEY,
id_fornecedores INT NOT NULL,
FOREIGN KEY (id_fornecedores) REFERENCES fornecedores (id),
nome VARCHAR (50) NOT NULL,
preco DECIMAL,
imagem LONGBLOB,
quantidade_disponivel INT,
ativo TINYINT (1)
);

SELECT * FROM produto_estoque;


CREATE TABLE endereco_cliente (
id INT AUTO_INCREMENT PRIMARY KEY,
id_cadastro_cliente INT NOT NULL,
FOREIGN KEY (id_cadastro_cliente) REFERENCES cadastro_cliente(id),
cep CHAR (8) NOT NULL,
endereco VARCHAR (100),
numero DECIMAL,
complemento VARCHAR (50),
bairro VARCHAR (50),
cidade VARCHAR (50),
estado VARCHAR (10),
endereco_entrega TINYINT (1)
);

SELECT * FROM endereco_cliente;


CREATE TABLE fornecedores (
id INT AUTO_INCREMENT PRIMARY KEY,
nome_empresa VARCHAR (50),
nome_contato VARCHAR (50),
produto_fornecimento VARCHAR (50),
telefone VARCHAR (50),
email VARCHAR (50),
endereco VARCHAR (100),
numero DECIMAL,
complemento VARCHAR (50),
bairro VARCHAR (50),
cidade VARCHAR (50),
estado VARCHAR (10),
prazo_entrega INT,
prazo_pagamento INT,
forma_pagamento VARCHAR (50)
);

INSERT INTO fornecedores (nome_empresa,nome_contato,produto_fornecimento,telefone,email,endereco,numero,complemento,bairro, cidade, estado,prazo_entrega,prazo_pagamento,forma_pagamento)
VALUES("BORGES","Lauro Graziane","Tecido elastano","958256235","lauro.borges@email.com","Rua das Gaivotas","23","2 andar","Brás","São Paulo","SP","15","90","faturado em boleto");

DELETE FROM fornecedores WHERE id=2;

SELECT * FROM fornecedores;
