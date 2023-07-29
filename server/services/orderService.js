const nodemailer = require('nodemailer');
const { getClientDetails } = require('../models/clientModel');
const { getSupplierDetails } = require('../models/supplierModel');
const { getProductId } = require('../models/productModel');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kioskinventorymanagement@gmail.com',
    // pass: '1nvent0rY!!',
    pass: 'kibrbtrosshsgcji',
  },
});

async function main(supplier, client, productList) {
  const info = await transporter.sendMail({
    from: '"Smudgy-G" <kioskinventorymanagement@gmail.com>',
    to: 'adamgriff86@gmail.com',
    subject: client.companyName,
    html: `
    <body>
      <h1>Order for ${client.companyName}</h1>

      <p>Dear ${supplier.companyName},</p>

      <p>${
        client.companyName
      } would like to order the following items for the next available delivery date: </p>

      <ul>
        <li><strong>Supplier:</strong> [Supplier Name]</li>
        <li><strong>Contact:</strong> [Contact Name]</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          ${productList
            .map(
              (product) => `
            <tr>
              <td>${product.productId}</td>
              <td>${product.name}</td>
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

async function sendOrder(clientId, supplierId, productList) {
  const supplier = getSupplierDetails(supplierId);
  const client = getClientDetails(clientId);

  const productListWithId = await Promise.all(
    productList.map(async (product) => {
      const productId = await getProductId(product.id);
      return {
        ...product,
        productId,
      };
    })
  );
  main(supplier, client, productListWithId);
}
/*
{
  id: 3,
  companyName: 'Beer Dewds',
  email: 'adamgriff86@gmail.com',
  contactName: 'Philip J. Fry',
  clientId: 1
}
{
  id: 2,
  companyName: "Big Ben's Burgers",
  email: 'ben@bbb.com.au',
  contactName: 'Benjamin Ramjan'
}
*/
module.exports = { sendOrder };
