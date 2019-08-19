# yamt
Yet Another Management Tool!

Para subir a aplicação, basta ter o docker e docker-compose instalados e executar o comando `docker-compose up -d`

Para ver os logs da aplicação: `docker-compose logs -f`

Ao iniciar os containers, a API não irá funcionar corretamente pois o banco de dados ainda não foi criado. Para cria-lo, navegue até a pasta raiz da API `projectMan` e execute `npm run initial-setup`.

Para executar futuras migrations, basta executar `npm run migrate`.

A imagem da API em NodeJS está executando o nodemon para desenvolvimento, então basta salvar algum arquivo que a aplicação será reiniciada.
