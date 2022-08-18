Criando models: 

npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string


Criando as migrações para o banco:

npx sequelize-cli db:migrate


Populando o banco de dados:

npx sequelize-cli seed:generate --name