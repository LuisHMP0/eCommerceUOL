# Desafio 03 
## Inicialização do projeto
01 - Primeiramente clone o repositório no vsCode ou baixe o arquivo zipado; <br>
02 - Já com o projeto aberto instale o npm em ambas as pastas (backend e frontend); <br>
```
npm install
```

### Backend
01 - Crie um arquivo .env no diretório da pasta backend; <br>
02 - Nele configure o caminho para seu banco de dados, lembre-se de colocar o nome de usuário, senha e nome do banco: <br> 
```
DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
```
03 - Configure também uma senha para o JWT: 
```
JWT_SECRET=your_generated_secret_key
```
04 - A chave deve ser longa o suficiente para garantir segurança. Recomenda-se que tenha pelo menos 32 caracteres.
