# Desafio 03 
## Inicialização do projeto
01 - Primeiramente separei o frontend do backend em pastas; <br> 
02 - Inicializei um projeto nest com prisma para fazer a integração com banco de dados: 
```
nest new backend
npm install prisma --save-dev
npx prisma init
npm install @prisma/client
```
## Shop - Tela inicial de produtos
01 - Utilizando o migration juntamente do prisma comecei a modular minha primeira tabela de produtos <br> 
02 - Adicionei os dados necessários dos produtos diretamente no banco de dados<br>
03 - Com o product module, service e controller fiz com que os dados fossem adquiridos com uma requisição http /products <br>
04 - Utilizei o `useEffect` e o `fetch` para a manipulação e leitura dos dados passados pelo backend <br>
