# Projeto E-commerce 
## Inicialização do projeto
- Primeiramente clone o repositório no vsCode ou baixe o arquivo zipado; <br>
- Já com o projeto aberto, vá para o terminal no diretório raiz e, caso queira rodar o docker, altere para a branch "backend"; <br>
```
git checkout backend
```

## 🚀  Docker Compose

Este projeto utiliza **Docker Compose** para facilitar a configuração e execução dos serviços necessários (como banco de dados e aplicação). Siga os passos abaixo para executá-lo corretamente em sua máquina.

---

## 📁 Pré-requisitos

Antes de tudo, você precisará ter o **Docker** e o **Docker Compose** instalados.  
Se ainda não os possui, acesse os links abaixo para download e instalação:

- 🔗 [Docker Desktop (Windows/macOS/Linux)](https://www.docker.com/products/docker-desktop/)

Verifique se está tudo instalado corretamente:

```bash
docker --version
docker compose version
```

## 💻 Configuração
- Crie um arquivo .env no diretório da pasta backend; <br>
- Nele configure o caminho para seu banco de dados, lembre-se de colocar o nome de usuário, senha e nome do banco: <br> 
```
DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
```
- Configure também uma senha para o JWT: 
- A chave deve ser longa o suficiente para garantir segurança. Recomenda-se que tenha pelo menos 32 caracteres.<br>
```
JWT_SECRET=your_generated_secret_key
```
- Adicione a porta <br> 
```
PORT=5000
```
## 🎯 Executando projeto! 

No diretório raiz, execute o seguinte comando: 

```
docker compose up
```

