import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const BASE_URL = 'http://localhost:3000'

async function main() {

  const category1 = await prisma.category.create({
    data: {
      name: 'Sofas',
    }
  })

  const category2 = await prisma.category.create({
    data: {
      name: 'Tables',
    }
  })

  const category3 = await prisma.category.create({
    data: {
      name: 'Chairs',
    }
  })

  await prisma.product.createMany({
    data: [
      {
        title: 'Syltherine',
        subtitle: 'Stylish cafe chair',
        price: 3500000,
        discount: 0.5,
        newProduct: false,
        description: 'Elevate the aesthetic of your café or home dining area with the Syltherine, a chair that embodies both style and comfort. Featuring a sleek, modern design, this chair is crafted with premium materials, offering a perfect balance of durability and elegance. ',
        categoryId: category3.id,
        stock: 3,
      },
      {
        title: 'Leviosa',
        subtitle: 'Stylish cafe chair',
        price: 2500000,
        discount: null,
        newProduct: false,
        description: 'Elevate the aesthetic of your café or home dining area with the Syltherine, a chair that embodies both style and comfort. Featuring a sleek, modern design, this chair is crafted with premium materials, offering a perfect balance of durability and elegance. ',
        categoryId: category3.id,
        stock: 3,
      },
      {
        title: 'Lolito',
        subtitle: 'Luxury big sofa',
        price: 14000000,
        discount: 0.5,
        newProduct: false,
        description: 'Indulge in unparalleled comfort with the Lolito, a luxury big sofa designed for those who appreciate the finer things in life. This expansive sofa is the epitome of elegance, featuring plush cushions and a spacious seating area that invites relaxation. ',
        categoryId: category1.id,
        stock: 3,
      },
      {
        title: 'Respira',
        subtitle: 'Outdoor bar table and stool',
        price: 500000,
        discount: null,
        newProduct: true,
        description: 'Experience unmatched relaxation with the Respira, a luxury big sofa crafted for those who value comfort and style. This expansive sofa embodies elegance, with its plush cushions and generous seating area that beckon you to unwind. ',
        categoryId: category2.id,
        stock: 3,
      },
      {
        title: 'Asgaard sofa',
        subtitle: 'Luxury big sofa',
        price: 250000,
        discount: null,
        newProduct: false,
        description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
        categoryId: category1.id,
        stock: 3,
      }, 
      {
        title: 'Nordic Comfort',
        subtitle: 'Scandinavian Style Sofa',
        price: 220000,
        discount: 0.2,
        newProduct: false,
        description: 'The Nordic Comfort sofa blends minimalistic design with plush comfort. Perfect for modern living spaces, it offers a relaxing and stylish retreat for any room.',
        categoryId: category1.id,
        stock: 3,
      }, 
      {
        title: 'Verona Leather',
        subtitle: 'Premium Leather Sofa',
        price: 280000,
        discount: null,
        newProduct: true,
        description: 'The Verona Leather sofa is a statement of luxury, featuring top-grain leather and a timeless design that adds elegance to any living space.',
        categoryId: category1.id,
        stock: 3,
      },
      {
        title: 'Milano Elegance',
        subtitle: 'Contemporary Sofa',
        price: 260000,
        discount: null,
        newProduct: true,
        description: 'With clean lines and a chic silhouette, the Milano Elegance sofa brings a modern touch to your home, offering both comfort and style.',
        categoryId: category1.id,
        stock: 3,
      }, 
      { 
        title: 'Avalon Chair',
        subtitle: 'Elegant Dining Chair',
        price: 80000,
        discount: 0.3,
        newProduct: false,
        description: 'The Avalon Chair is a perfect blend of comfort and style, designed to enhance any dining experience with its luxurious upholstery and sleek design.',
        categoryId: category3.id,
        stock: 3,
      }, 
      {
        title: 'Venice Armchair',
        subtitle: 'Modern Accent Chair',
        price: 90000,
        discount: null,
        newProduct: true,
        description: 'The Venice Armchair adds a modern flair to your living space, featuring a contemporary design that complements any décor.',
        categoryId: category3.id,
        stock: 3,
      },
      {
        title: 'Oslo Recliner',
        subtitle: 'Comfortable Reclining Chair',
        price: 110000,
        discount: 0.1,
        newProduct: false,
        description: 'The Oslo Recliner combines functionality with comfort, offering adjustable positions and a plush design for ultimate relaxation.',
        categoryId: category3.id,
        stock: 3,
      },
      {
        title: 'Siena Swivel Chair',
        subtitle: 'Stylish Office Chair',
        price: 70000,
        discount: 0.1,
        newProduct: false,
        description: 'The Siena Swivel Chair is perfect for your workspace, combining ergonomic support with a sleek, modern look.',
        categoryId: category3.id,
        stock: 3,
      },
      {
        title: 'Bordeaux Coffee Table',
        subtitle: 'Elegant Living Room Table',
        price: 120000,
        discount: 0.2,
        newProduct: false,
        description: 'The Bordeaux Coffee Table is a masterpiece of craftsmanship, offering a stylish focal point for your living room with its refined design.',
        categoryId: category2.id,
        stock: 3,
      }, 
      { 
        title: 'Tuscany Dining Table',
        subtitle: 'Rustic Wooden Table',
        price: 200000,
        discount: null,
        newProduct: true,
        description: 'The Tuscany Dining Table is perfect for family gatherings, featuring a sturdy construction and a rustic charm that adds warmth to any dining area.',
        categoryId: category2.id,
        stock: 3,
      },
      {
        title: 'Capri Side Table',
        subtitle: 'Modern Side Table',
        price: 50000,
        discount: 0.1,
        newProduct: false,
        description: 'The Capri Side Table is both functional and stylish, offering a perfect spot for your essentials with its modern design and compact size.',
        categoryId: category2.id,
        stock: 3,
      }, 
      {
        title: 'Geneva Bookshelf',
        subtitle: 'Modern Wooden Bookshelf',
        price: 1300000,
        discount: 0.1,
        newProduct: false,
        description: 'The Geneva Bookshelf offers a stylish and functional way to organize your books and decor. Its sleek, modern design makes it a perfect addition to any living space.',
        categoryId: category2.id,
        stock: 3,
      }
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
