# Etapa 1: build da aplicação
FROM node:18-alpine AS builder

WORKDIR /app


# Copia os arquivos de dependências
COPY package*.json ./
COPY tsconfig*.json ./
COPY prisma ./prisma/
COPY src ./src/

# Instala dependências
RUN npm install

# Gera os arquivos Prisma
RUN npx prisma generate

# Compila TypeScript
RUN npm run build

# Etapa 2: imagem final para produção
FROM node:18-alpine

WORKDIR /app

# Copia apenas os arquivos compilados e de runtime
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY package*.json ./
COPY .env .env

# Expõe a porta da API
EXPOSE 5000

# Comando de inicialização
CMD ["node", "dist/src/main.js"]