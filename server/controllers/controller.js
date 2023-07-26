// import the Prisma client
// instantiate it with the connection details for the database
// to perform database operations
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//use async functions to perform database operations
async function main() {
  try {
    await prisma.$connect();
    console.log('connected to database');
    const newSupplier = await prisma.supplier.create({
      data: {
        companyName: 'Beer Dewds',
        email: 'orders@beerdewds.com',
        contactName: 'Benjamin Ramjan',
      },
    });
    console.log(newSupplier);
  } catch (error) {
    console.log(error, 'Error connecting to DB');
  } finally {
    await prisma.$disconnect();
  }
}

main();

// async function getSuppliers (req, res) {
//   try {
//     const suppliers = await prisma.supplier.findMany();
//     console.log(suppliers);
//     res.send(suppliers);
//   } catch (error) {
//     res.status(400).send(`Error getting suppliers: ${error}`);
//   }
// };

// async function createSupplier() {
//   try {
//     const newSupplier = await prisma.supplier.create({
//       data: {
//         companyName: "Beer Dewds",
//         email: "orders@beerdewds.com",
//         contactName: "Benjamin Ramjan"
//       },
//     })
//     res.status(201).send(newSupplier);
//   } catch (error) {
//     res.status(400).send(`Error creating new supplier: ${error}`);
//   }
// }
