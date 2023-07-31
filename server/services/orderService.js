import { createTransport } from 'nodemailer';
import { getClientDetails } from '../models/clientModel.js';
import { getSupplierDetails } from '../models/supplierModel.js';
import { getProductId } from '../models/productModel.js';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'kioskinventorymanagement@gmail.com',
    pass: 'kibrbtrosshsgcji',
  },
});

async function main(supplier, client, productList) {
  console.log(supplier, client, productList);
  const info = await transporter.sendMail({
    from: '"Smudgy-G" <kioskinventorymanagement@gmail.com>',
    to: 'adamgriff86@gmail.com',
    subject: `${client.companyName}`,
    html: `
    <body>
      <h1>Order for ${client.companyName}</h1>

      <p>Dear ${supplier.companyName},</p>

      <p>${
  client.companyName
} would like to order the following items for the next available delivery date: </p>

      <ul>
        <li><strong>Supplier:</strong> ${supplier.companyName}</li>
        <li><strong>Contact:</strong> ${supplier.contactName}</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          ${productList
    .map(
      (product) => `
            <tr>
              <td>${product.productId}</td>
              <td>${product.productName}</td>
              <td>${product.quantity}</td>
            </tr>
          `
    )
    .join('')}
        </tbody>
      </table>

      <p>Please let us know if you have any questions or concerns about this order. Thank you for your prompt attention to this matter.</p>

      <p>Best regards,</p>
      <p>${client.contactName}</p>
      <a href="mailto:${client.email}">${client.email}</a>

    </body>
    `,
  });
  console.log('Message sent: %s', info.messageId);
}

export async function sendOrder(clientId, supplierId, productList) {
  try {
    const supplier = await getSupplierDetails(supplierId);
    const client = await getClientDetails(clientId);

    const productListWithId = await Promise.all(
      productList.map(async (product) => {
        const productId = await getProductId(product.id);
        return {
          ...product,
          productId,
        };
      })
    );
    await main(supplier, client, productListWithId);
  } catch (error) {
    console.log(error);
  }
}
