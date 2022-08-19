Criando models:

npx sequelize-cli model:create --name clientes --attributes nome:string,senha:string,email:string,sexo:string,cpf:string,data_nascimento:date,telefone:string,admnistrador:string,image_url:string


Criando as migrações para o banco:

Enviando as migrações: npx sequelize-cli db:migrate
Desfazendo as migrações: npx sequelize-cli db:migrate:undo:all


Populando o banco de dados:

Gerando as tabelas de seeders: npx sequelize-cli seed:generate --name NomeDaTabela
Enviando as tabelas de seeders ao banco: npx sequelize-cli seed:all
Desfazendo as de seeders no banco: npx sequelize db:seed:undo:all



OBSERVAÇÃO PARA DETALHES DO PRODUTOS: 
quantidade_p > 0 ? <button class=“tamanho”> : null

Utilizar condicional para enviar ao carrinho somente se tiver. 