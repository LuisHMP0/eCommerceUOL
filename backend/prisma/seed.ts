import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const BASE_URL = 'http://localhost:3000'

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: 'Produto 1',
        subtitle: 'Subtítulo do Produto 1',
        price: 19.99,
        discount: 2.00,
        newProduct: true,
        imageUrl: `${BASE_URL}/imgs/syltherine.png`,
        description: 'Descrição do Produto 1',
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
