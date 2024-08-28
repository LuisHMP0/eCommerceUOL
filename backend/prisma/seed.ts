import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const BASE_URL = 'http://localhost:3000'

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: 'Produto 2',
        subtitle: 'Subtítulo do Produto 1',
        price: 100000,
        discount: 0.5,
        newProduct: false,
        imageUrl: `${BASE_URL}/imgs/syltherine.png`,
        description: 'Descrição do Produto 1',
        stock: 3,
      },
    ]
  });
  console.log('Dados de produtos inseridos com sucesso!');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
