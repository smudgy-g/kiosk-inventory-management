import { prisma } from '../prisma/client.js';

export async function getSupplierDetails(id) {
  const supplier = await prisma.supplier.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return supplier;
}

export async function checkSupplierByEmail(email) {
  const result = await prisma.supplier.findUnique({
    where: {
      email: email,
    },
  });
  return result;
}

export async function getSuppliersByClient(id) {
  const result = await prisma.supplier.findMany({
    where: {
      clientId: parseInt(id),
    },
  });
  return result;
}

export async function createSupplier({ company, email, contact, clientId }) {
  const supplier = await prisma.supplier.create({
    data: {
      companyName: company,
      email: email,
      contactName: contact,
      clientId: parseInt(clientId),
    },
  });
  return supplier;
}

export async function deleteSupplier(id) {
  console.log('model', id)
  const result = await prisma.supplier.delete({
    where: {
      id: parseInt(id),
    },
  });
  return result;
}
