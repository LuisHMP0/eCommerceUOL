# Desafio 03 
## Inicialização do projeto
- Primeiramente clone o repositório no vsCode ou baixe o arquivo zipado; <br>
- Já com o projeto aberto instale o npm em ambas as pastas (backend e frontend); <br>
```
npm install
```

### Backend
- Crie um arquivo .env no diretório da pasta backend; <br>
- Nele configure o caminho para seu banco de dados, lembre-se de colocar o nome de usuário, senha e nome do banco: <br> 
```
DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
```
- Configure também uma senha para o JWT: 
```
JWT_SECRET=your_generated_secret_key
```
- A chave deve ser longa o suficiente para garantir segurança. Recomenda-se que tenha pelo menos 32 caracteres.<br>
- Faça um migration para adcionar as tabelas no seu bd: <br>
```
npx prisma migrate dev
```
- Configure o prisma client
```
npm install @prisma/client
```
- Rode o seed.ts para adicionar os dados fixados ao bd: 
```
npm run seed
```
- Rode o projeto: 
```
npm run start
```

### Frontend
- Com o npm instalado basta rodar o projeto vite:
```
npm run dev
```
